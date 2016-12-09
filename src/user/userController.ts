import { Request, Response, NextFunction } from "express";
import User from "./user";

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (user) return res.sendStatus(409);
    const newUser = await User.create({ email });
    if (newUser) return res.sendStatus(200);
  } catch(err) {
    console.error(err);
    return next(err);
  }
}
