import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    updateMyProfile: protectedProcedure.input(z.object({
        
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        await ctx.prisma.user.update({
            where: {
                id: userId,
            },
            data: {

            },
        })
    }),

    sendFollowRequest: protectedProcedure.input(z.object({
        id: z.string()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        return ctx.prisma.followRequest.create({
            data: {
                followeeId: userId,
                followerId: input.id,
            }
        })
    }),

    acceptFollowRequest: protectedProcedure.input(z.object({
        id: z.string()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        const receivedRequest = await ctx.prisma.followRequest.findUniqueOrThrow({
            where: {
                id: input.id
            }
        });
    }),

    denyFollowRequest: protectedProcedure.input(z.object({
        id: z.string()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        const receivedRequest = await ctx.prisma.followRequest.findUniqueOrThrow({
            where: {
                id: input.id
            }
        });
    }),

  getUserInfo: protectedProcedure.input(z.object({
    id: z.string(),
  })).query(async ({ ctx, input  }) => {
    const userId = ctx.session.user.id;

    const followerCount = await ctx.prisma.following.count({
        where: {
            followeeId: input.id
        }
    });

    const followingCount = await ctx.prisma.following.count({
        where: {
            followerId: input.id
        }
    });

    const userInfo = await ctx.prisma.user.findUniqueOrThrow({
        where: {
            id: input.id,
        }
    });

    return {
        ...userInfo,
        followerCount: followerCount,
        followingCount: followingCount,
    }
  }),
});
