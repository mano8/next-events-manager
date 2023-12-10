import { getAuthSession } from "@/src/auth/nextauth-option";
import { cache } from 'react';
import { prisma } from "@/src/db/prisma";
import { Prisma } from "@prisma/client";

const userQuery = {
    id: true,
    name: true,
    username: true,
    role: true,
    image: true,
    bio: true,
    createdAt: true,
    link: true
} satisfies Prisma.UserSelect

/*export const getUser = async () => {
    const session = await getAuthSession();

    if (!session?.user.id) {
        throw new Error("User not found");
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id,
        }
    })

    return user;
}
*/
export const getUserProfile = cache ((userId: string) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            ...userQuery,
        }
    })
})

export const getUserEdit = (userId: string) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },

        select: {
            ...userQuery,
        },
    });
};


export type UserProfile = NonNullable<
    Prisma.PromiseReturnType<typeof getUserProfile>
>;

export type UserEdit = NonNullable<Prisma.PromiseReturnType<typeof getUserEdit>>;