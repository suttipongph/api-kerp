const employee_statusService = require("../services/employee_status_service");
const respons = require("../shared/tools/respons_handler");
let createEmployeeStatusTable = async (req, res) => {
  try {
    res.status(200).json(await employee_statusService.createEmployeeStatusTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEmployeeStatusTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employee_statusService.getEmployeeStatusTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEmployeeStatusTable = async (req, res) => {
  try {
    res.status(200).json(await employee_statusService.editEmployeeStatusTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEmployeeStatusTable = async (req, res) => {
  try {
    res.status(200).json(await employee_statusService.deleteEmployeeStatusTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEmployeeStatusTableById = async (req, res) => {
  try {
   res.status(200).json(await employee_statusService.getEmployeeStatusTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getEmployeeStatusTableList,
  getEmployeeStatusTableById,
  createEmployeeStatusTable,
  editEmployeeStatusTable,
  deleteEmployeeStatusTable,
};
