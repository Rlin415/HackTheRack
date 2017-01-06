import * as express from "express";
import * as cp from 'child_process';
import * as mongoose from "mongoose";
import { middlewares, apiRouter, settings } from "./config";
import { compose } from "./utils";
import { startItemsFetcher } from './workers';

setInterval(startItemsFetcher.bind(null, cp), 5000);

mongoose.connect('mongodb://localhost/hackTheRack');

const build = compose(middlewares, apiRouter, settings);
const app = build(express());

app.listen(app.get("port"), () => console.log("Server listening on port", app.get("port")));
