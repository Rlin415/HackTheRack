import { Express } from "express";
import * as express from "express";
import { createUser } from "../user/userController";

export default (app: Express): Express => {
  const router = express.Router();
  router.post("/signup", createUser);
  app.use("/api", router);
  return app;
}
