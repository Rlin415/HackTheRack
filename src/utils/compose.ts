import { Express } from "express";

const compose = (...funcs: Function[]): Function => (app: Express): Express => (
  funcs.reduce((res: Express, func: Function) => func(res), app) as Express
);

export default compose;
