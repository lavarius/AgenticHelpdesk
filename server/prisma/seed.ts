import "dotenv/config";
import { PrismaClient, Role } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { hashPassword } from "better-auth/crypto";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set");
    process.exit(1);
  }

  const hashedPassword = await hashPassword(password);
  const now = new Date();

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.upsert({
      where: { email },
      update: {},
      create: {
        id: crypto.randomUUID(),
        name: "Admin",
        email,
        emailVerified: true,
        role: Role.admin,
        createdAt: now,
        updatedAt: now,
      },
    });

    await tx.account.upsert({
      where: { id: `credential-${user.id}` },
      update: { password: hashedPassword },
      create: {
        id: `credential-${user.id}`,
        accountId: email,
        providerId: "credential",
        userId: user.id,
        password: hashedPassword,
        createdAt: now,
        updatedAt: now,
      },
    });

    console.log(`Admin user seeded: ${email}`);
  });
}

main().finally(() => prisma.$disconnect());
