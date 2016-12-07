import { Express } from "express";
import * as express from "express";
import userController from "../user";

const apiRouter = (app: Express): void => {
  const router = express.Router();
  router.post("/signup", userController.createUser);
  app.use("/api", router);
}

export default apiRouter;
