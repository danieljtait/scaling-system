import type { PageServerLoad } from "./$types";


export const load = (async ({ params }) => {
    return {
        feedTitle: "Hello, World"
    };

}) satisfies PageServerLoad