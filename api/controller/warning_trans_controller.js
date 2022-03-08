const warning_transService = require("../services/warning_trans_service");
const empolyeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createWarningTransTable = async (req, res) => {
  try {
    res.status(200).json(await warning_transService.createWarningTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWarningTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warning_transService.getWarningTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWarningTransTable = async (req, res) => {
  try {
    res.status(200).json(await warning_transService.editWarningTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWarningTransTable = async (req, res) => {
  try {
    res.status(200).json(await warning_transService.deleteWarningTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWarningTransTableById = async (req, res) => {
  try {
   res.status(200).json(await warning_transService.getWarningTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await empolyeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getWarningTransTableList,
  getWarningTransTableById,
  createWarningTransTable,
  editWarningTransTable,
  deleteWarningTransTable,
  getEmployeeDropdown,
};
