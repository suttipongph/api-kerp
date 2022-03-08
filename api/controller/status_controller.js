const statusService = require("../services/status_service");
const respons = require("../shared/tools/respons_handler");
let createStatusTable = async (req, res) => {
  try {
    res.status(200).json(await statusService.createStatusTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getStatusTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await statusService.getStatusTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editStatusTable = async (req, res) => {
  try {
    res.status(200).json(await statusService.editStatusTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteStatusTable = async (req, res) => {
  try {
    res.status(200).json(await statusService.deleteStatusTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getStatusTableById = async (req, res) => {
  try {
   res.status(200).json(await statusService.getStatusTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getStatusTableList,
  getStatusTableById,
  createStatusTable,
  editStatusTable,
  deleteStatusTable,
};
