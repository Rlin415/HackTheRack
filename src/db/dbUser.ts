import * as mongoose from "mongoose";
import userSchema from '../user/userSchema';

const user = new mongoose.Schema(userSchema)

const dbUser =  mongoose.model('user', user);

export default dbUser;
