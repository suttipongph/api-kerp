const model = require("../model/customer_model");
let createCustomerTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCustomerTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteCustomerTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataCustomer = async (req) => {
  try {
    var customer = await model.getCustomerCode(req);
    if (customer) {
      var lastCustomerCode = customer.customer_code;
      let newlastCustomerCode = 1;
      let codeForMat = "";
      if (lastCustomerCode) {
        newlastCustomerCode = parseInt(lastCustomerCode) + 1;
      }
      if (newlastCustomerCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastCustomerCode;
        if (newlastCustomerCode < 100) {
          codeForMat = "0" + "0" + newlastCustomerCode;
          if (newlastCustomerCode < 10) {
            codeForMat = "0" + newlastCustomerCode;
          }
        }
      }
      return {
        customer_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        customer_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getCustomerTableList,
  getCustomerTableById,
  createCustomerTable,
  editCustomerTable,
  deleteCustomerTable,
  getCustomerDropdown,
  getInitialDataCustomer,
};
