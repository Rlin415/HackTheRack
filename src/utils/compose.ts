import { Express } from "express";

export default (...funcs: Function[]): Function => (app: Express): Express => {
  return funcs.reduce((res, func) => func(res), app) as Express;
}
