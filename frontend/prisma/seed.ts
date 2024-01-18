import { PrismaClient } from '@prisma/client'
import entityData from "../src/lib/data.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  prisma.$executeRaw`DELETE FROM ChatSession;`;
  prisma.$executeRaw`DELETE FROM Entity;`;

  for (const p of entityData) {
    const entity = await prisma.entity.create({
      data: {
        name: p.name,
      }
    })
    console.log(`Created entity: ${entity.name}`)
  }
  
  const chatSession = await prisma.chatSession.create({
    data: {
      id: 1
    }
  })
  console.log(`Created chatSession: ${chatSession.id}`)
  
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })