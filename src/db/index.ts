import * as mongoose from "mongoose";
import dbUser from './dbUser';
import dbRetail from './dbRetail';

mongoose.connect('mongodb://localhost/hackTheRack');

export { dbRetail, dbUser };
