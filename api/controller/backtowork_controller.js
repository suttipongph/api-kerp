const backtoworkService = require("../services/backtowork_service");
const employeeService = require("../services/employee_service");
const positionService = require("../services/position_service");
const departmentService = require("../services/department_service");
const salaryService = require("../services/salary_service");
const respons = require("../shared/tools/respons_handler");
let createBacktoworkTable = async (req, res) => {
  try {
    res.status(200).json(await backtoworkService.createBacktoworkTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBacktoworkTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await backtoworkService.getBacktoworkTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBacktoworkTable = async (req, res) => {
  try {
    res.status(200).json(await backtoworkService.editBacktoworkTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBacktoworkTable = async (req, res) => {
  try {
    res.status(200).json(await backtoworkService.deleteBacktoworkTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBacktoworkTableById = async (req, res) => {
  try {
   res.status(200).json(await backtoworkService.getBacktoworkTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDepartmentDropdown = async (req, res) => {
  try {
    res.status(200).json(await departmentService.getDepartmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSalaryDropdown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getBacktoworkTableList,
  getBacktoworkTableById,
  createBacktoworkTable,
  editBacktoworkTable,
  deleteBacktoworkTable,
  getEmployeeDropdown,
  getPositionDropdown,
  getDepartmentDropdown,
  getSalaryDropdown,
};
