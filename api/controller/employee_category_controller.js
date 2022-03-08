const employee_categoryService = require("../services/employee_category_service");
const respons = require("../shared/tools/respons_handler");
let createEmployeeCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await employee_categoryService.createEmployeeCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEmployeeCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employee_categoryService.getEmployeeCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEmployeeCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await employee_categoryService.editEmployeeCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEmployeeCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await employee_categoryService.deleteEmployeeCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEmployeeCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await employee_categoryService.getEmployeeCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getEmployeeCategoryTableList,
  getEmployeeCategoryTableById,
  createEmployeeCategoryTable,
  editEmployeeCategoryTable,
  deleteEmployeeCategoryTable,
};
