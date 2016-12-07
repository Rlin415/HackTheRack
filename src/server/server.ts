import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import apiRouter from "./routes/apiRouter";

const server = express();

server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(express.static("build"));
server.use("/scripts", express.static("node_modules"));

apiRouter(server);

server.set("port", 3000);

server.listen(server.get("port"), () => console.log("Server listening on port", server.get("port")));
