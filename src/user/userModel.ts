import { userDao } from '../dao';

export const findUser = (email: String) => userDao.findOne(email);
export const makeUser = (email: String) => userDao.create(email);
