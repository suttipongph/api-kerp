const stockcutService = require("../services/stockcut_service");
const employeeService = require("../services/employee_service");
const partService = require("../services/part_service");
const unitService = require("../services/unit_service");
const inventorytransactionService = require("../services/inventorytransection_service");
const respons = require("../shared/tools/respons_handler");
let createStockcutTable = async (req, res) => {
  try {
    res.status(200).json(await stockcutService.createStockcutTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getStockcutTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await stockcutService.getStockcutTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editStockcutTable = async (req, res) => {
  try {
    res.status(200).json(await stockcutService.editStockcutTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteStockcutTable = async (req, res) => {
  try {
    res.status(200).json(await stockcutService.deleteStockcutTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getStockcutTableById = async (req, res) => {
  try {
   res.status(200).json(await stockcutService.getStockcutTableById(req));
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
const getPartList = async (req, res) => {
  try {
    res.status(200).json(await partService.getPartTableList(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getStockcutTableList,
  getStockcutTableById,
  createStockcutTable,
  editStockcutTable,
  deleteStockcutTable,
  getEmployeeDropdown,
  getPartDropdown,
  getUnitDropdown,
  getInventorytransactionDropdown,
  getPartList
};
