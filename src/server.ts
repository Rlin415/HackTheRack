import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as mongoose from "mongoose";
import apiRouter from "./config/apiRouter";

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("build"));
app.use("/scripts", express.static("node_modules"));

mongoose.connect('mongodb://localhost/hackTheRack');

apiRouter(app);

app.set("port", 3000);

app.listen(app.get("port"), () => console.log("Server listening on port", app.get("port")));
