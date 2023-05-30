import {createTRPCRouter, protectedProcedure} from "~/server/api/trpc";
import {z} from "zod";

export const friendRouter = createTRPCRouter({
    getAll: protectedProcedure.query(async ({ctx}) => {
       return ctx.prisma.friendRelationship.findMany({
           where: {
               userSelfId: ctx.session.user.id
           }
       });
    }),

    // 친구 요청 전송
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

    // 친구 요청 액션
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