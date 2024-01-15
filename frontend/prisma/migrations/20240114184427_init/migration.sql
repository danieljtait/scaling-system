-- CreateTable
CREATE TABLE "entity" (
    "entity_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "entity_pkey" PRIMARY KEY ("entity_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "entity_name_key" ON "entity"("name");
