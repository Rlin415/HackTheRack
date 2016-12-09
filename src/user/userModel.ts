import { dbUser } from '../db';

export const userSchema = {
  email: {
    type: String,
    lowercase: true
  }
}

export const findUser = (email: String) => dbUser.findOne({ email });
export const makeUser = (email: String) => dbUser.create({ email });
