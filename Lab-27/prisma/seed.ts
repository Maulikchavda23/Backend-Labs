import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function safeCreateUser(data: { UserID: string; UserName: string; Password: string }) {
  const existing = await prisma.user.findFirst({ where: { UserID: data.UserID } });
  if (existing) {
    try {
      return await prisma.user.update({ where: { id: existing.id }, data });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        update: "User",
        updates: [{ q: { UserID: data.UserID }, u: { $set: data } }],
      });
      return await prisma.user.findFirst({ where: { UserID: data.UserID } });
    }
  }

  try {
    return await prisma.user.create({ data });
  } catch (err: any) {
    await prisma.$runCommandRaw({
      insert: "User",
      documents: [data],
    });
    return await prisma.user.findFirst({ where: { UserID: data.UserID } });
  }
}

async function safeCreateTask(data: {
  TaskID: string;
  TaskTitle: string;
  TaskDescription: string;
  IsCompleted: boolean;
  UserID: string;
}) {
  const existing = await prisma.task.findFirst({ where: { TaskID: data.TaskID } });
  if (existing) {
    try {
      return await prisma.task.update({ where: { id: existing.id }, data });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        update: "Task",
        updates: [{ q: { TaskID: data.TaskID }, u: { $set: data } }],
      });
      return await prisma.task.findFirst({ where: { TaskID: data.TaskID } });
    }
  }

  try {
    return await prisma.task.create({ data });
  } catch (err: any) {
    await prisma.$runCommandRaw({
      insert: "Task",
      documents: [data],
    });
    return await prisma.task.findFirst({ where: { TaskID: data.TaskID } });
  }
}

async function main() {
  console.log("Seeding database...");

  // Seed Users
  await safeCreateUser({ UserID: "U001", UserName: "John", Password: "1234" });
  await safeCreateUser({ UserID: "U002", UserName: "Alice", Password: "5678" });

  // Seed Tasks
  await safeCreateTask({
    TaskID: "T001",
    TaskTitle: "Learn Prisma",
    TaskDescription: "Learn Prisma ORM with MongoDB",
    IsCompleted: false,
    UserID: "U001",
  });

  await safeCreateTask({
    TaskID: "T002",
    TaskTitle: "Learn MongoDB",
    TaskDescription: "Practice MongoDB database operations",
    IsCompleted: true,
    UserID: "U001",
  });

  await safeCreateTask({
    TaskID: "T003",
    TaskTitle: "Complete Lab",
    TaskDescription: "Complete Prisma lab practical",
    IsCompleted: false,
    UserID: "U002",
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
