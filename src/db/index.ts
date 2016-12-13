import * as mongoose from "mongoose";
import userSchema from '../user/userSchema';

mongoose.connect('mongodb://localhost/hackTheRack');

export const dbUser =  mongoose.model('user', new mongoose.Schema(userSchema));
