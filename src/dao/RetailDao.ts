import { Retail } from '../db';

interface RetailDao {
  findItems(name: String): any;
}

const retailDao: RetailDao = {
  findItems: (name: String) => Retail.find({ name })
}

export default retailDao;
