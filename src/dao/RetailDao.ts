import { dbRetail } from '../db';

interface RetailDao {
  findItemsBySubClass(subclass: String): any;
}

const retailDao: RetailDao = {
  findItemsBySubClass: (subclass: String) => dbRetail.find({'departments.classes.subclasses': subclass})
}

export default retailDao;
