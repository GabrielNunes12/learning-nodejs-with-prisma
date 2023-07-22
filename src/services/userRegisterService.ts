import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../repositories/prisma";

export async function userRegisterService(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
  });
  const { name, email, password } = registerBodySchema.parse(request.body);
  await prisma.user.create({
    data: { name, email, password_hash: password },
  });
  return reply.status(201).send();
}
