import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";
import {TRPCError} from "@trpc/server";

export const authRouter = createTRPCRouter({
    login: publicProcedure
        .input(
            z.object({
                username: z.string(),
                password: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { username, password } = input;
            return;
        }),
    logout: publicProcedure.mutation(async ({ ctx }) => {
        return;
    }),
});
