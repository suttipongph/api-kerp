const customer_categoryService = require("../services/customer_category_service");
const respons = require("../shared/tools/respons_handler");
let createCustomerCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await customer_categoryService.createCustomerCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCustomerCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await customer_categoryService.getCustomerCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCustomerCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await customer_categoryService.editCustomerCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCustomerCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await customer_categoryService.deleteCustomerCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCustomerCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await customer_categoryService.getCustomerCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataCustomerCategory = async (req, res) => {
  try {
   res.status(200).json(await customer_categoryService.getInitialDataCustomerCategory(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCustomerCategoryTableList,
  getCustomerCategoryTableById,
  createCustomerCategoryTable,
  editCustomerCategoryTable,
  deleteCustomerCategoryTable,
  getInitialDataCustomerCategory,
};
