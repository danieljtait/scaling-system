import type { Actions, PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const actions = {
	save: async ( { url }) => {
		// TODO log the user in
        // console.log(event);
        console.log(url);
        console.log("Saving new info");
        throw redirect(303, '/providers/provider/0')
	},
} satisfies Actions;

export const load = (async ( ) => {

}) satisfies PageServerLoad