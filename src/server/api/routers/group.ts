import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import {GroupRole} from ".prisma/client";
import {TRPCError} from "@trpc/server";

export const groupRouter = createTRPCRouter({
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

  createGroup: protectedProcedure.input(z.object({
    name: z.string(),
  })).mutation(async ({ ctx, input  }) => {
    const userId = ctx.session.user.id;

    return await ctx.prisma.group.create({
      data: {
        name: input.name,
        participants: {
          create: {
            participantId: userId,
            role: GroupRole.Admin,
          }
        }
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
});
