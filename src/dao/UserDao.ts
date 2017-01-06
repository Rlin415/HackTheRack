import { User } from '../db';

interface UserDao {
  findOne(email: String): any;
  create(email: String): any;
}

const userDao: UserDao = {
  findOne: (email: String) => User.findOne({ email }),
  create: (email: String) => User.create({ email })
}

export default userDao;
