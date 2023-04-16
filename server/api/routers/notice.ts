import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const noticeRouter = createTRPCRouter({
    getNotices: protectedProcedure
        .query(async ({ ctx}) => {
            try {
                const notices = await ctx.prisma.notice.findMany();
                return notices;
            } catch (error) {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: (error as Error).message,
                });
            }
        }),

    getNotice: protectedProcedure
        .input(z.object({
            id: z.number(),
        }))
        .query(async({ ctx, input }) => {
            try {
                const notice = await ctx.prisma.notice.findUniqueOrThrow({where: {id: input.id}});
                return notice;
            } catch (error) {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: (error as Error).message,
                });
            }
        })
});
