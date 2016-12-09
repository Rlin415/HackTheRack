import * as express from "express";
import * as mongoose from "mongoose";
import apiRouter from "./config/apiRouter";
import middlewares from "./config/middlewares";
import settings from "./config/settings";
import compose from "./utils/compose";

mongoose.connect('mongodb://localhost/hackTheRack');

const build = compose(middlewares, apiRouter, settings);
const app = build(express());

app.listen(app.get("port"), () => console.log("Server listening on port", app.get("port")));
