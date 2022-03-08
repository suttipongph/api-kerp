const model = require("../model/supplier_branch_model");
let createSupplierBranchTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierBranchTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSupplierBranchTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteSupplierBranchTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierBranchTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierBranchDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getSupplierBranchTableList,
  getSupplierBranchTableById,
  createSupplierBranchTable,
  editSupplierBranchTable,
  deleteSupplierBranchTable,
  getSupplierBranchDropdown
};
