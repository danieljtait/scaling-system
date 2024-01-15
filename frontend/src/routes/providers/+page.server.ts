import type { PageServerLoad } from "./$types";


export const load = (async ( ) => {
    return {
        feedTitle: "Hello, World"
    };

}) satisfies PageServerLoad