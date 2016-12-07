import { Express } from "express";
import * as express from "express";
import { createUser } from "../controllers/UserController";

const apiRouter = (app: Express): void => {
  const router = express.Router();
  router.post("/signup", createUser);
  app.use("/api", router);
}

export default apiRouter;
