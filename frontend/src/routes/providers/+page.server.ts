import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		// TODO log the user in
        console.log(event);
        throw redirect(303, '/providers/provider/0')
	},
} satisfies Actions;

export const load = (async ( ) => {
    const pageSize: number = 25
    const response = await prisma.infoProvider.findMany({
        take: pageSize
    })
    return {
        feedTitle: "Hello, World",
        providers: response
    };

}) satisfies PageServerLoad