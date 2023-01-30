import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function timesPopulate() {
  let time = await prisma.times.findFirst();
  if (!time) {
    await prisma.times.createMany({
      data: [
        { time: "08:00:00" },
        { time: "10:00:00" },
        { time: "12:00:00" },
        { time: "14:00:00" },
        { time: "18:00:00" },
      ],
    });
  }
}

timesPopulate()
  .then(() => {
    console.log("Times populated!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function coursesPopulate() {
  let course = await prisma.courses.findFirst();
  if (!course) {
    await prisma.courses.createMany({
      data: [
        { name: "Cross-training" },
        { name: "Biking" },
        { name: "Yoga" },
        { name: "Pilates" },
      ],
    });
  }
}

coursesPopulate()
  .then(() => {
    console.log("Courses populated!");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
