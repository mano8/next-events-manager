import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import { AuthOptions, getServerSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { env } from '../env';
import {prisma} from '@/src/db/prisma'

export const authOptions: (
    req?: NextApiRequest,
    res?: NextApiResponse
) => AuthOptions = (req, res) => ({  
    
    // Configure one or more authentication providers  
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
            profile(profile){
                return {
                    id: profile.id.toString(),
                    username: profile.login,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url
                }
            }
        }),
        // ...add more providers here
    ],
    callbacks: {
        session({session, user}){
            if(!session?.user) return session;
            session.user.id = user.id;
            session.user.image = user.image;
            session.user.role = user.role;
            return session;
        }
    }
})

export const getAuthSession = async() => {
    const session = await getServerSession(authOptions());
    return session;
}


export const getUserCanEdit = async() => {
    const session = await getServerSession(authOptions());
    if (!session?.user.id) {
        throw new Error('You must be logged in to do this.');
    }
    return session;
}