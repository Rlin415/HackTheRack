import * as mongoose from "mongoose";
import userSchema from '../user/userSchema';

export const dbUser =  mongoose.model('user', new mongoose.Schema(userSchema));

mongoose.connect('mongodb://localhost/hackTheRack');
