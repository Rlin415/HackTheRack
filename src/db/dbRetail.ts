import * as mongoose from "mongoose";
import * as retail from '../retail/retailSchema';

const itemSchema = new mongoose.Schema(retail.itemSchema);
const subclassSchema = new mongoose.Schema(retail.subclassSchema);
const classSchema = new mongoose.Schema(retail.classSchema);
const departmentSchema = new mongoose.Schema(retail.departmentSchema);
const divisionSchema = new mongoose.Schema(retail.divisionSchema);
const retailSchema = new mongoose.Schema(retail.retailSchema);

const dbRetail =  mongoose.model('retail', retailSchema);

export default dbRetail;
