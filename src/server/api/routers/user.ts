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
        name: z.string(),
        color: z.string(),
    })).mutation(async ({ ctx, input  }) => {
        await ctx.prisma.category.create({
            data: {
                ownerId: ctx.session.user.id,
                ...input
            }
        });
    }),


    // 로그인 사용자 하위 카테고리 조회
    getCategories: protectedProcedure.query(async ({ ctx, input  }) => {
        return await ctx.prisma.category.findMany({
            where: {
                ownerId: ctx.session.user.id,
            }
        });
    }),

    // 로그인 사용자 하위 카테고리 삭제
    deleteCategory: protectedProcedure.input(z.object({
        categoryId: z.string()
    })).mutation(async ({ ctx, input  }) => {

    }),

    // 프로필 수정
    updateMyProfile: protectedProcedure.input(z.object({
        name: z.optional(z.string()),
        introduce: z.optional(z.string()),
    })).mutation(async ({ ctx, input  }) => {
        const userId = ctx.session.user.id;

        await ctx.prisma.user.update({
            where: {
                id: userId,
            },
            data: input,
        })
    }),
});
