import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true
  }
});

const User =  mongoose.model('user', userSchema);

export default User;
