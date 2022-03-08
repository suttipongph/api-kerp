const company_categoryService = require("../services/company_category_service");
const respons = require("../shared/tools/respons_handler");
let createCompanyCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await company_categoryService.createCompanyCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCompanyCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await company_categoryService.getCompanyCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCompanyCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await company_categoryService.editCompanyCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCompanyCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await company_categoryService.deleteCompanyCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCompanyCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await company_categoryService.getCompanyCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCompanyCategoryTableList,
  getCompanyCategoryTableById,
  createCompanyCategoryTable,
  editCompanyCategoryTable,
  deleteCompanyCategoryTable,
};
