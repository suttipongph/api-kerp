const stockoutService = require("../services/stockout_service");
const employeeService = require("../services/employee_service");
const partService = require("../services/part_service");
const unitService = require("../services/unit_service");
const inventorytransactionService = require("../services/inventorytransection_service");
const respons = require("../shared/tools/respons_handler");
let createStockoutTable = async (req, res) => {
  try {
    res.status(200).json(await stockoutService.createStockoutTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getStockoutTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await stockoutService.getStockoutTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editStockoutTable = async (req, res) => {
  try {
    res.status(200).json(await stockoutService.editStockoutTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteStockoutTable = async (req, res) => {
  try {
    res.status(200).json(await stockoutService.deleteStockoutTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getStockoutTableById = async (req, res) => {
  try {
   res.status(200).json(await stockoutService.getStockoutTableById(req));
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
  getStockoutTableList,
  getStockoutTableById,
  createStockoutTable,
  editStockoutTable,
  deleteStockoutTable,
  getEmployeeDropdown,
  getPartDropdown,
  getUnitDropdown,
  getInventorytransactionDropdown,
};
