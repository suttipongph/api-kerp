const sparepartsService = require("../services/spareparts_service");
const employeeService = require("../services/employee_service");
const statusService = require("../services/status_service");
const unitService = require("../services/unit_service");
const purchaseheaderService = require("../services/purchase_header_service");

const respons = require("../shared/tools/respons_handler");

let createSparepartsTable = async (req, res) => {
  try {
    res.status(200).json(await sparepartsService.createSparepartsTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSparepartsTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await sparepartsService.getSparepartsTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSparepartsTable = async (req, res) => {
  try {
    res.status(200).json(await sparepartsService.editSparepartsTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSparepartsTable = async (req, res) => {
  try {
    res.status(200).json(await sparepartsService.deleteSparepartsTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSparepartsTableById = async (req, res) => {
  try {
    res.status(200).json(await sparepartsService.getSparepartsTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getStatusDropDown = async (req, res) => {
  try {
    res.status(200).json(await statusService.getStatusDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getPurchaseHeaderDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await purchaseheaderService.getPurchaseHeaderDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getUnitDropDown = async (req, res) => {
  try {
    res.status(200).json(await unitService.getUnitDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

module.exports = {
  getSparepartsTableList,
  getSparepartsTableById,
  createSparepartsTable,
  editSparepartsTable,
  deleteSparepartsTable,
  getEmployeeDropDown,
  getStatusDropDown,
  getPurchaseHeaderDropDown,
  getUnitDropDown,
};
