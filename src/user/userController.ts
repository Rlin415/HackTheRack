import { Request, Response, NextFunction } from "express";
import { findUser, makeUser } from "./userModel";

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
  const email: String = req.body.email;
  try {
    const user = await findUser(email);
    if (user) return res.sendStatus(409);
    const newUser = await makeUser(email);
    if (newUser) return res.sendStatus(200);
  } catch(err) {
    console.error(err);
    return next(err);
  }
}
