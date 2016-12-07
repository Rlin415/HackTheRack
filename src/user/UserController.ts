import { Request, Response } from "express";

// export const createUser = (req: Request, res: Response): void => {
//   console.log('create user');
// }

class UserController {
  constructor() {}

  createUser(req: Request, res: Response) {
    console.log('create user');
  }
}

export default UserController;
