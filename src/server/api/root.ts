import { createTRPCRouter } from "~/server/api/trpc";
import { scheduleRouter } from "~/server/api/routers/schedule";
import { groupRouter } from "~/server/api/routers/group";
import { userRouter } from "./routers/user";
import { meRouter } from "~/server/api/routers/me";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  group: groupRouter,
  me: meRouter,
  user: userRouter,
  schedule: scheduleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
