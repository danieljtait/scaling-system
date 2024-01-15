/*
  Warnings:

  - You are about to drop the `entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "entity";

-- CreateTable
CREATE TABLE "Entity" (
    "entity_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("entity_id")
);
