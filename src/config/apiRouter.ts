import { Express } from "express";
import * as express from "express";
import { createUser } from "../user/userController";

const apiRouter = (app: Express): void => {
  const router = express.Router();
  router.post("/signup", createUser);
  app.use("/api", router);
}

export default apiRouter;
