const punishment_transService = require("../services/punishment_trans_service");
const employeeService = require("../services/employee_service");
const punishmentTypeService = require("../services/punishment_type_service");
const respons = require("../shared/tools/respons_handler");
let createPunishmentTransTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_transService.createPunishmentTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPunishmentTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_transService.getPunishmentTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPunishmentTransTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_transService.editPunishmentTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePunishmentTransTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_transService.deletePunishmentTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPunishmentTransTableById = async (req, res) => {
  try {
   res.status(200).json(await punishment_transService.getPunishmentTransTableById(req));
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
const getPunishmentTypeDropdown = async (req, res) => {
  try {
    res.status(200).json(await punishmentTypeService.getPunishmentTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getPunishmentTransTableList,
  getPunishmentTransTableById,
  createPunishmentTransTable,
  editPunishmentTransTable,
  deletePunishmentTransTable,
  getEmployeeDropdown,
  getPunishmentTypeDropdown,
};
