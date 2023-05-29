import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    // 사용자 정보 조회
    getMyInfo: protectedProcedure.query(async ({ ctx, input  }) => {
        const followerCount = await ctx.prisma.following.count({
            where: {
                followeeId: ctx.session.user.id
            }
        });

        const followingCount = await ctx.prisma.following.count({
            where: {
                followerId: ctx.session.user.id
            }
        });

        const userInfo = await ctx.prisma.user.findUniqueOrThrow({
            where: {
                id: ctx.session.user.id,
            }
        });

        return {
            ...userInfo,
            followerCount: followerCount,
            followingCount: followingCount,
        }
    }),
    getMyGroupInfos: protectedProcedure.query(async ({ ctx, input  }) => {
        const groupInfos = await ctx.prisma.group.findMany({
            where: {
                participants: {
                    some: {
                        participantId: ctx.session.user.id
                    }
                }
            },
            include: {
                participants: {
                    include: {
                        participant: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                },
            }
        })
        return groupInfos;
    }),
    getUserInfo: publicProcedure.input(z.object({
        id: z.string(),
    })).query(async ({ ctx, input  }) => {
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
    // 해당 사용자를 팔로잉 하는 리스트
    getFollowerList: publicProcedure.input(z.object({
        userId: z.string(),
    })).query(async ({ ctx, input  }) => {
        const userId = input.userId;

        return ctx.prisma.following.findMany({
            where: {
                followerId: userId,
            }
        })
    }),
    // 해당 사용자가 팔로잉 하는 리스트
    getFollowingList: publicProcedure.input(z.object({
        userId: z.string(),
    })).query(async ({ ctx, input  }) => {
        const userId = input.userId;

        return ctx.prisma.following.findMany({
            where: {
                followeeId: userId,
            }
        })
    }),

    // 로그인 사용자 하위 카테고리 생성
    createCategory: protectedProcedure.input(z.object({
        name: z.string()
    })).mutation(async ({ ctx, input  }) => {

    }),


    // 로그인 사용자 하위 카테고리 조회
    getCategories: protectedProcedure.query(async ({ ctx, input  }) => {

    }),

    // 로그인 사용자 하위 카테고리 삭제
    deleteCategory: protectedProcedure.input(z.object({
        categoryId: z.string()
    })).mutation(async ({ ctx, input  }) => {

    }),

    // 프로필 수정
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

    // 팔로우 요청 전송
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

    // 팔로우 요청 액션
    replyFollowRequest: protectedProcedure.input(z.object({
        id: z.string(),
        isAccept: z.boolean()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        const receivedRequest = await ctx.prisma.followRequest.findUniqueOrThrow({
            where: {
                id: input.id
            }
        });
    }),
});
