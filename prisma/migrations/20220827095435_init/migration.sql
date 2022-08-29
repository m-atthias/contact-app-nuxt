-- CreateEnum
CREATE TYPE "ContactType" AS ENUM ('PRIVATE', 'WORK');

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ContactType" NOT NULL DEFAULT 'PRIVATE',
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
