// src/routes/+page.server.ts
// import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
// const response = await prisma.entity.findMany({
//     where: { ... },
//     include: { ... },
//   })

// 2.
return { entity: {
    name: "Apple"
} };
}) satisfies PageServerLoad;