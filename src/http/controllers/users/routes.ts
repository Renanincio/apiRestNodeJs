import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { Profile } from "./profile";
import { Authenticate } from "./authenticate";
import { Register } from "./register";
import { Refresh } from "./refresh";

export async function userRoutes(app: FastifyInstance) {
  app.post("users", Register);
  app.post("sessions", Authenticate);

  app.patch("/token/refresh", Refresh);

  app.get("me", { onRequest: [verifyJWT] }, Profile);
}
