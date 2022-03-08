const unitService = require("../services/unit_service");
const respons = require("../shared/tools/respons_handler");
let createUnitTable = async (req, res) => {
  try {
    res.status(200).json(await unitService.createUnitTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getUnitTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await unitService.getUnitTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editUnitTable = async (req, res) => {
  try {
    res.status(200).json(await unitService.editUnitTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteUnitTable = async (req, res) => {
  try {
    res.status(200).json(await unitService.deleteUnitTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getUnitTableById = async (req, res) => {
  try {
   res.status(200).json(await unitService.getUnitTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getUnitTableList,
  getUnitTableById,
  createUnitTable,
  editUnitTable,
  deleteUnitTable,
};
