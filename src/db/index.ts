import * as mongoose from "mongoose";
import userSchema from '../user/userSchema';
import retailSchema from '../retail/retailSchema';

mongoose.connect('mongodb://localhost/hackTheRack');

export const dbUser =  mongoose.model('user', new mongoose.Schema(userSchema));
export const dbRetail = mongoose.model('store', new mongoose.Schema(retailSchema));
