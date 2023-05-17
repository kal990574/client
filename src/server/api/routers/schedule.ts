import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const scheduleRouter = createTRPCRouter({
  createSchedule: protectedProcedure.input(z.object({
    title: z.string(),
    summary: z.string(),
    startDate: z.date(),
    startTime: z.optional(z.date()),
    endDate: z.date(),
    endTime: z.optional(z.date()),
  })).mutation(async ({ ctx, input  }) => {
    const userId = ctx.session.user.id;

    return await ctx.prisma.schedule.create({
      data: {
        ...input,
        ownerId: userId,
        location: "",
        participants: {
          create: {
            userId: userId
          }
        }
      }
    });
  }),

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
