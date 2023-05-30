import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";
import {GroupRole} from ".prisma/client";
import {TRPCError} from "@trpc/server";
import {friendRouter} from "~/server/api/routers/me/friend";

export const meRouter = createTRPCRouter({
    friend: friendRouter,
});
