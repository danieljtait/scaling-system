import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async( ) => 
{
    const chatSession = await prisma.chatSession.findUniqueOrThrow({
        where: {
            id: 1
        },
        include: {
            messages: true
        }
    });
    return {
        chat: chatSession
    }
}) satisfies PageServerLoad