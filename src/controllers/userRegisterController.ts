import { FastifyReply, FastifyRequest } from "fastify";
import { app } from "../app";
import { userRegisterService } from "../services/userService";
export async function UserRegisterController() {
  app.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
    return await userRegisterService(request, reply);
  });
}
