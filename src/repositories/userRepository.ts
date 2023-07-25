import { prisma } from "./prisma";
export async function UserRegisterRepository(
  name: string,
  password: string,
  email: string
) {
  await prisma.user.create({
    data: { name, email, password_hash: password },
  });
}
