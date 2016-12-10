import { dbUser } from '../db';

interface UserDao {
  findOne(email: String): any;
  create(email: String): any;
}

const userDao: UserDao = {
  findOne: (email: String) => dbUser.findOne({ email }),
  create: (email: String) => dbUser.create({ email })
}

export default userDao;
