const model = require("../model/customer_category_model");
let createCustomerCategoryTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerCategoryTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCustomerCategoryTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteCustomerCategoryTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerCategoryTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerCategoryDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataCustomerCategory = async (req) => {
  try {
    var customer_category = await model.getCustomerCategoryCode(req);
    if (customer_category) {
      var lastCustomerCategoryCode = customer_category.customer_category_code;
      let newlastCustomerCategoryCode = 1;
      let codeForMat = "";
      if (lastCustomerCategoryCode) {
        newlastCustomerCategoryCode = parseInt(lastCustomerCategoryCode) + 1;
      }
      if (newlastCustomerCategoryCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastCustomerCategoryCode;
        if (newlastCustomerCategoryCode < 100) {
          codeForMat = "0" + "0" + newlastCustomerCategoryCode;
          if (newlastCustomerCategoryCode < 10) {
            codeForMat = "0" + newlastCustomerCategoryCode;
          }
        }
      }
      return {
        customer_category_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        customer_category_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getCustomerCategoryTableList,
  getCustomerCategoryTableById,
  createCustomerCategoryTable,
  editCustomerCategoryTable,
  deleteCustomerCategoryTable,
  getCustomerCategoryDropdown,
  getInitialDataCustomerCategory,
};
