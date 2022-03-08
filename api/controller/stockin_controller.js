const stockinService = require("../services/stockin_service");
const employeeService = require("../services/employee_service");
const partService = require("../services/part_service");
const unitService = require("../services/unit_service");
const inventorytransactionService = require("../services/inventorytransection_service");
const respons = require("../shared/tools/respons_handler");
let createStockinTable = async (req, res) => {
  try {
    res.status(200).json(await stockinService.createStockinTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getStockinTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await stockinService.getStockinTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editStockinTable = async (req, res) => {
  try {
    res.status(200).json(await stockinService.editStockinTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteStockinTable = async (req, res) => {
  try {
    res.status(200).json(await stockinService.deleteStockinTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getStockinTableById = async (req, res) => {
  try {
   res.status(200).json(await stockinService.getStockinTableById(req));
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
const getPartDropdown = async (req, res) => {
  try {
    res.status(200).json(await partService.getPartDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getUnitDropdown = async (req, res) => {
  try {
    res.status(200).json(await unitService.getUnitDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInventorytransactionDropdown = async (req, res) => {
  try {
    res.status(200).json(await inventorytransactionService.getInventorytransectionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getStockinTableList,
  getStockinTableById,
  createStockinTable,
  editStockinTable,
  deleteStockinTable,
  getEmployeeDropdown,
  getPartDropdown,
  getUnitDropdown,
  getInventorytransactionDropdown,
};
