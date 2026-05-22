/*
  Warnings:

  - You are about to drop the column `DueDate` on the `Todos` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Todos` table. All the data in the column will be lost.
  - The `status` column on the `Todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `dueDate` to the `Todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "DueDate",
DROP COLUMN "updateAt",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "TodoStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "isDeleted" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "Todos_userId_idx" ON "Todos"("userId");
