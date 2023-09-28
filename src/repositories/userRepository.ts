import { UserHandler } from "../exceptions/UserHandler";
import { prisma } from "./prisma";
export async function UserRegisterRepository(
  name: string,
  password: string,
  email: string
) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) {
    throw new UserHandler("Email already exists", 409, new Date())
      .messageStatus;
  }
  await prisma.user.create({
    data: { name, email, password_hash: password },
  });
}
