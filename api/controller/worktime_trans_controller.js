const worktime_transService = require("../services/worktime_trans_service");
// const timeticketTypeService = require("../services/timeticket_type_service");
const employeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createWorktimeTransTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_transService.createWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWorktimeTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.getWorktimeTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWorktimeTransTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_transService.editWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWorktimeTransTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_transService.deleteWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWorktimeTransTableById = async (req, res) => {
  try {
   res.status(200).json(await worktime_transService.getWorktimeTransTableById(req));
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
const getCopyWorkTimeTransByEmployeeOriginal = async (req, res) => {
  try {
    res.status(200).json(await worktime_transService.getCopyWorkTimeTransByEmployeeOriginal(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let createWorktimeTransTableByEmployeeUUID = async (req, res) => {
  try {
    res.status(200).json(await worktime_transService.createWorktimeTransTableByEmployeeUUID(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
module.exports = {
  getWorktimeTransTableList,
  getWorktimeTransTableById,
  createWorktimeTransTable,
  editWorktimeTransTable,
  deleteWorktimeTransTable,
  getEmployeeDropdown,
  getCopyWorkTimeTransByEmployeeOriginal,
  createWorktimeTransTableByEmployeeUUID
};
