const stockreturnService = require("../services/stockreturn_service");
const employeeService = require("../services/employee_service");
const partService = require("../services/part_service");
const unitService = require("../services/unit_service");
const inventorytransactionService = require("../services/inventorytransection_service");
const respons = require("../shared/tools/respons_handler");
let createStockreturnTable = async (req, res) => {
  try {
    res.status(200).json(await stockreturnService.createStockreturnTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getStockreturnTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await stockreturnService.getStockreturnTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editStockreturnTable = async (req, res) => {
  try {
    res.status(200).json(await stockreturnService.editStockreturnTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteStockreturnTable = async (req, res) => {
  try {
    res.status(200).json(await stockreturnService.deleteStockreturnTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getStockreturnTableById = async (req, res) => {
  try {
   res.status(200).json(await stockreturnService.getStockreturnTableById(req));
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
  getStockreturnTableList,
  getStockreturnTableById,
  createStockreturnTable,
  editStockreturnTable,
  deleteStockreturnTable,
  getEmployeeDropdown,
  getPartDropdown,
  getUnitDropdown,
  getInventorytransactionDropdown,
};
