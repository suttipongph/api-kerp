const departmentService = require("../services/department_service");
const employee_service = require("../services/employee_service");
const position_service = require("../services/position_service");
const respons = require("../shared/tools/respons_handler");
let createDepartmentTable = async (req, res) => {
  try {
    res.status(200).json(await departmentService.createDepartmentTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getDepartmentTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmentService.getDepartmentTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editDepartmentTable = async (req, res) => {
  try {
    res.status(200).json(await departmentService.editDepartmentTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteDepartmentTable = async (req, res) => {
  try {
    res.status(200).json(await departmentService.deleteDepartmentTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getDepartmentTableById = async (req, res) => {
  try {
   res.status(200).json(await departmentService.getDepartmentTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employee_service.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await position_service.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getDepartmentTableList,
  getDepartmentTableById,
  createDepartmentTable,
  editDepartmentTable,
  deleteDepartmentTable,
  getEmployeeDropdown,
  getPositionDropdown,
};
