import userDao from '../dao/UserDao';

export const findUser = (email: String) => userDao.findOne(email);
export const makeUser = (email: String) => userDao.create(email);
