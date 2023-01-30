/*
  Warnings:

  - You are about to drop the column `course_id` on the `enrollments` table. All the data in the column will be lost.
  - Added the required column `class_id` to the `enrollments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "enrollments" DROP CONSTRAINT "course_fk";

-- DropIndex
DROP INDEX "custumer_course_unique";

-- AlterTable
ALTER TABLE "enrollments" DROP COLUMN "course_id",
ADD COLUMN     "class_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "time" VARCHAR(8) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "class_fk" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "fk_course_id" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "fk_time_id" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
