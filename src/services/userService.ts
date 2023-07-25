import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { hash } from "bcrypt";
import { UserRegisterRepository } from "../repositories/userRepository";

export async function userRegisterService(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
  });
  let { name, email, password } = registerBodySchema.parse(request.body);
  password = await hash(password, 5);
  await UserRegisterRepository(name, email, password);
  return reply.status(201).send();
}
