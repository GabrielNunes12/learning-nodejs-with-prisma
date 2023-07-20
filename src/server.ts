import { app } from "./app";
import { UserRegisterController } from "./controllers/userRegisterController";
import { env } from "./env";

app.register(UserRegisterController);
app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running");
  });
