import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import {GroupRole} from ".prisma/client";
import {TRPCError} from "@trpc/server";

const joinedGroupProcedure = protectedProcedure.input(z.object({
  groupId: z.string(),
})).use(async ({ ctx, input, next}) => {
  const userId = ctx.session.user.id;

  const isJoinedGroup = !!await ctx.prisma.groupParticipant.findUnique({
    where: {
      groupId_participantId: {
        groupId: input.groupId,
        participantId: userId,
      }
    }
  });

  if (!isJoinedGroup) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: "You are not in that group",
    });
  }

  return next();
});

export const groupRouter = createTRPCRouter({
  // 참가한 그룹 조회
  getAllGroups: protectedProcedure.query(({ctx}) => {
    const userId = ctx.session.user.id;

    return ctx.prisma.group.findMany({
      where: {
        participants: {
          some: {
            participantId: userId
          }
        }
      }
    })
  }),

  // 그룹 생성
  createGroup: protectedProcedure.input(
      z.object({
        name: z.string(),
        summary: z.string()
      })
  ).mutation(async ({ ctx, input  }) => {
    const userId = ctx.session.user.id;

    return await ctx.prisma.group.create({
      data: {
        name: input.name,
        summary: input.summary,
        participants: {
          create: {
            participantId: userId,
            role: GroupRole.Admin,
          }
        },
      }
    })
  }),

  deleteGroup: protectedProcedure.input(z.object({
    id: z.string()
  })).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    const group = await ctx.prisma.group.findUniqueOrThrow({where: {id: input.id}});

    const groupParticipantInfo = await ctx.prisma.groupParticipant.findUniqueOrThrow({
      where: {
        groupId_participantId: {
          groupId: group.id,
          participantId: userId,
        }
      }
    });

    if (groupParticipantInfo.role !== GroupRole.Admin) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "관리자가 아님",
      })
    }

    await ctx.prisma.group.delete({
      where: {
        id: group.id
      }
    });

    return;
  }),

  // 스케쥴 조회
  getSchedules: joinedGroupProcedure.query(async ({ ctx, input  }) => {
    return ctx.prisma.groupSchedule.findMany({
      where: {
        groupId: input.groupId,
      }
    })
  }),

  // 스케쥴 생성
  createSchedule: joinedGroupProcedure.input(z.object({
    groupId: z.string(),
    title: z.string(),
    summary: z.string(),
    categoryName: z.optional(z.string()),
    location: z.optional(z.string()),
    startDate: z.date(),
    startTime: z.optional(z.date()),
    endDate: z.date(),
    endTime: z.optional(z.date()),
  })).mutation(async ({ ctx, input  }) => {
    return await ctx.prisma.groupSchedule.create({
      data: {
        ...input,
      }
    });
  }),
});
