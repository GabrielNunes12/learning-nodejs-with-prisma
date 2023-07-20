import { FastifyReply, FastifyRequest } from "fastify";
import { app } from "../app";
import { userRegisterService } from "../services/userRegisterService";
export async function UserRegisterController() {
  app.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
    const data = await userRegisterService();
    if (data) {
      return data;
    } else {
      reply.status(500).send({
        error: "User registration invalid",
      });
    }
  });
}
