import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as express from "express";
import { Express } from "express";

const middlewares = (app: Express): Express => {
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(express.static("build"));
  app.use("/scripts", express.static("node_modules"));
  return app;
}

export default middlewares;
