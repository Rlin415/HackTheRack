import { retailDao } from '../dao';

export const getItems = (name: String) => retailDao.findItems(name);
