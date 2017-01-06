import * as mongoose from "mongoose";
import * as retail from '../retail/retailSchema';

const itemSchema = new mongoose.Schema({
  name: String
});

const retailSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const Retail =  mongoose.model('retail', retailSchema);

export default Retail;
