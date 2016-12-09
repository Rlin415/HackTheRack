import { Express } from "express";

export default (app: Express): Express => {
  app.set("port", 3000);
  return app;
}
