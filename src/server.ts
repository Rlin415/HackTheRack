import * as express from "express";
import { middlewares, apiRouter, settings } from "./config";
import compose from "./utils/compose";

const build = compose(middlewares, apiRouter, settings);
const app = build(express());

app.listen(app.get("port"), () => console.log("Server listening on port", app.get("port")));
