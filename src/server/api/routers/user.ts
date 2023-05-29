import {z} from "zod";

import {createTRPCRouter, protectedProcedure, publicProcedure,} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    // 사용자 정보 조회
    getMyInfo: protectedProcedure.query(async ({ ctx, input  }) => {
        const userInfo = await ctx.prisma.user.findUniqueOrThrow({
            where: {
                id: ctx.session.user.id,
            },
            include: {
                friends: true,
            }
        });

        return userInfo;
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
    getGroupInfo: protectedProcedure.input(z.string()).query(async ({ ctx, input  }) => {
        return await ctx.prisma.group.findUnique({
            where: {
                id: input
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
        });
    }),
    getUserInfo: publicProcedure.input(z.object({
        id: z.string(),
    })).query(async ({ ctx, input  }) => {
        return await ctx.prisma.user.findUniqueOrThrow({
            where: {
                id: input.id,
            },
        });
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
    sendFriendRequest: protectedProcedure.input(z.object({
        id: z.string()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        return ctx.prisma.friendRequest.create({
            data: {
                senderId: userId,
                receiverId: input.id,
            }
        })
    }),

    // 친구 신청 액션
    actionFriendRequest: protectedProcedure.input(z.object({
        id: z.string(),
        isAccept: z.boolean()
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        const receivedRequest = await ctx.prisma.friendRequest.findUniqueOrThrow({
            where: {
                id: input.id
            }
        });

        await ctx.prisma.friendRelationship.createMany({
            data: [
                {
                    userSelfId: receivedRequest.senderId,
                    userOtherId: receivedRequest.receiverId,
                },
                {
                    userSelfId: receivedRequest.receiverId,
                    userOtherId: receivedRequest.senderId,
                },
            ]
        })
    }),
});
