import * as express from "express";
import * as cp from 'child_process';
import { middlewares, apiRouter, settings } from "./config";
import { compose } from "./utils";

const build = compose(middlewares, apiRouter, settings);
const app = build(express());

app.listen(app.get("port"), () => console.log("Server listening on port", app.get("port")));
