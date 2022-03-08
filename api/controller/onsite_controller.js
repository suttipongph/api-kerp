const onsiteService = require("../services/onsite_service");
const employeeService = require("../services/employee_service");
const documentStatusService = require("../services/document_status_service");
const respons = require("../shared/tools/respons_handler");
let createOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsiteService.createOnsiteTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getOnsiteTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await onsiteService.getOnsiteTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsiteService.editOnsiteTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsiteService.deleteOnsiteTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getOnsiteTableById = async (req, res) => {
  try {
   res.status(200).json(await onsiteService.getOnsiteTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropdown = async (req, res) => {
  try {
    res.status(200).json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getOnsiteTableList,
  getOnsiteTableById,
  createOnsiteTable,
  editOnsiteTable,
  deleteOnsiteTable,
  getEmployeeDropdown,
  getDocumentStatusDropdown,
};
