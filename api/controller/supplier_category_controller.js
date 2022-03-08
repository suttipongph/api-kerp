const supplier_categoryService = require("../services/supplier_category_service");
const respons = require("../shared/tools/respons_handler");
let createSupplierCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_categoryService.createSupplierCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSupplierCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await supplier_categoryService.getSupplierCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSupplierCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_categoryService.editSupplierCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSupplierCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_categoryService.deleteSupplierCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSupplierCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await supplier_categoryService.getSupplierCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getSupplierCategoryTableList,
  getSupplierCategoryTableById,
  createSupplierCategoryTable,
  editSupplierCategoryTable,
  deleteSupplierCategoryTable,
};
