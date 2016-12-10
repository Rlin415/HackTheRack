import { Express } from "express";

const settings = (app: Express): Express => {
  app.set("port", 3000);
  return app;
}

export default settings;
