const model = require("../model/supplier_category_model");
let createSupplierCategoryTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierCategoryTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSupplierCategoryTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteSupplierCategoryTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierCategoryTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSupplierCategoryDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getSupplierCategoryTableList,
  getSupplierCategoryTableById,
  createSupplierCategoryTable,
  editSupplierCategoryTable,
  deleteSupplierCategoryTable,
  getSupplierCategoryDropdown
};
