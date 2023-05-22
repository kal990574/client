import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const scheduleRouter = createTRPCRouter({
  // 스케쥴 생성
  createSchedule: protectedProcedure.input(z.object({
    title: z.string(),
    summary: z.string(),
    categoryName: z.optional(z.string()),
    startDate: z.date(),
    startTime: z.optional(z.date()),
    location: z.optional(z.string()),
    endDate: z.date(),
    endTime: z.optional(z.date()),
  })).mutation(async ({ ctx, input  }) => {
    const userId = ctx.session.user.id;

    return await ctx.prisma.schedule.create({
      data: {
        ...input,
        ownerId: userId,
        participants: {
          create: {
            userId: userId
          }
        }
      }
    });
  }),

  // 참가되어 있는 모든 스케줄 조회
  getSchedules: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.schedule.findMany({
      where: {
        participants: {
          some: {
            userId : ctx.session.user.id
          }
        }
      }
    });
  }),
});
