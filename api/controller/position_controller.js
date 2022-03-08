const positionService = require("../services/position_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const respons = require("../shared/tools/respons_handler");
let createPositionTable = async (req, res) => {
  try {
    res.status(200).json(await positionService.createPositionTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPositionTableList = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPositionTable = async (req, res) => {
  try {
    res.status(200).json(await positionService.editPositionTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePositionTable = async (req, res) => {
  try {
    res.status(200).json(await positionService.deletePositionTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPositionTableById = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDepartmentDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmentService.getDepartmentDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getPositionTableList,
  getPositionTableById,
  createPositionTable,
  editPositionTable,
  deletePositionTable,
  getEmployeeDropDown,
  getDepartmentDropDown,
};
