const model = require("../model/customer_branch_model");
let createCustomerBranchTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerBranchTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCustomerBranchTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteCustomerBranchTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerBranchTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCustomerBranchDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getCustomerBranchTableList,
  getCustomerBranchTableById,
  createCustomerBranchTable,
  editCustomerBranchTable,
  deleteCustomerBranchTable,
  getCustomerBranchDropdown
};
