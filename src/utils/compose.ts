import { Express } from "express";

export default (...funcs: Function[]): Function => (app: Express): Express => (
  funcs.reduce((res: Express, func: Function) => func(res), app) as Express
);
