import { PrismaClient } from '@prisma/client'
import entityData from "../src/lib/data.json" assert { type: "json" }

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.$executeRaw`DELETE FROM chatsession;`;
  await prisma.$executeRaw`DELETE FROM entity;`;

  for (const p of entityData) {
    const entity = await prisma.entity.create({
      data: {
        name: p.name,
      }
    })
    console.log(`Created entity: ${entity.name}`)
  }
  
  const chatSession = await prisma.chatsession.create({
    data: {
      id: 1,
      messages: {
        create: [
          {
            sender: "Dan",
            role: "User",
            text: "Hello!"
          },
          {
            sender: "Some Model",
            role: "Agent",
            text: "Hi!"
          }
        ]
      }
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