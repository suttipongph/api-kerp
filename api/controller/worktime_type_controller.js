const worktime_typeService = require("../services/worktime_type_service");
const respons = require("../shared/tools/respons_handler");
let createWorktimeTypeTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_typeService.createWorktimeTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWorktimeTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_typeService.getWorktimeTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWorktimeTypeTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_typeService.editWorktimeTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWorktimeTypeTable = async (req, res) => {
  try {
    res.status(200).json(await worktime_typeService.deleteWorktimeTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWorktimeTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await worktime_typeService.getWorktimeTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getWorktimeTypeTableList,
  getWorktimeTypeTableById,
  createWorktimeTypeTable,
  editWorktimeTypeTable,
  deleteWorktimeTypeTable,
};
