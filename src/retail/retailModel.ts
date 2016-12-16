import { retailDao } from '../dao';

export const getItemsBySubClass = (subclass: String) => retailDao.findItemsBySubClass(subclass);
