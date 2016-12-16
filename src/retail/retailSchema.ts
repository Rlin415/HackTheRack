export const itemSchema = {
  name: String
};

export const subclassSchema = {
  name: String,
  items: [itemSchema]
};

export const classSchema = {
  name: String,
  subclass: [subclassSchema]
};

export const departmentSchema = {
  name: String,
  class: [classSchema]
};

export const divisionSchema = {
  name: String,
  departments: [departmentSchema]
};

export const retailSchema = {
  name: String,
  divisions: [divisionSchema]
};
