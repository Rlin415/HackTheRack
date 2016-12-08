import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true
  }
});

export default mongoose.model('user', userSchema);
