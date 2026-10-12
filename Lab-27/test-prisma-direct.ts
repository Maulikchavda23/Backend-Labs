import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  console.log("Testing full CRUD with $runCommandRaw + Prisma read methods...");

  // 1. Insert User
  const insertRes = await prisma.$runCommandRaw({
    insert: "User",
    documents: [{ UserID: "U001", UserName: "John", Password: "1234" }],
  });
  console.log("INSERT:", insertRes);

  // 2. Read Users via Prisma findMany()
  const users = await prisma.user.findMany();
  console.log("GET ALL (findMany):", users);

  // 3. Read User via Prisma findFirst()
  const user = await prisma.user.findFirst({ where: { UserID: "U001" } });
  console.log("GET BY ID (findFirst):", user);

  // 4. Update User via $runCommandRaw
  const updateRes = await prisma.$runCommandRaw({
    update: "User",
    updates: [{ q: { UserID: "U001" }, u: { $set: { UserName: "John Updated" } } }],
  });
  console.log("UPDATE:", updateRes);

  // 5. Read Updated User
  const updatedUser = await prisma.user.findFirst({ where: { UserID: "U001" } });
  console.log("GET UPDATED:", updatedUser);

  // 6. Delete User via $runCommandRaw
  const deleteRes = await prisma.$runCommandRaw({
    delete: "User",
    deletes: [{ q: { UserID: "U001" }, limit: 1 }],
  });
  console.log("DELETE:", deleteRes);

  // 7. Read Users after Delete
  const usersAfterDelete = await prisma.user.findMany();
  console.log("GET AFTER DELETE:", usersAfterDelete);

  await prisma.$disconnect();
}

test();
