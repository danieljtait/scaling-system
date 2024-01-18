import prisma from "$lib/prisma";
import type { PageServerLoad, Actions } from "./$types";

export const actions = {
	sendmsg: async ( { request }) => {
		// TODO log the user in
        const data = await request.formData();
        console.log(data);
	},
} satisfies Actions;

export const load = (async( ) => 
{
    const chatsession = await prisma.chatsession.findUniqueOrThrow({
        where: {
            id: 1
        },
        include: {
            messages: true
        }
    });
    return {
        chat: chatsession
    }
}) satisfies PageServerLoad