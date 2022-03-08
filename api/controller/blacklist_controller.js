const blacklistService = require("../services/blacklist_service");
const employee_service = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createBlacklistTable = async (req, res) => {
  try {
    res.status(200).json(await blacklistService.createBlacklistTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBlacklistTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await blacklistService.getBlacklistTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBlacklistTable = async (req, res) => {
  try {
    res.status(200).json(await blacklistService.editBlacklistTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBlacklistTable = async (req, res) => {
  try {
    res.status(200).json(await blacklistService.deleteBlacklistTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBlacklistTableById = async (req, res) => {
  try {
   res.status(200).json(await blacklistService.getBlacklistTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employee_service.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getBlacklistTableList,
  getBlacklistTableById,
  createBlacklistTable,
  editBlacklistTable,
  deleteBlacklistTable,
  getEmployeeDropdown,
};
