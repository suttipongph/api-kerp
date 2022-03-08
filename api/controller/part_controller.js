const partService = require("../services/part_service");
const unitService = require("../services/unit_service");
const respons = require("../shared/tools/respons_handler");
let createPartTable = async (req, res) => {
  try {
    res.status(200).json(await partService.createPartTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPartTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await partService.getPartTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPartTable = async (req, res) => {
  try {
    res.status(200).json(await partService.editPartTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePartTable = async (req, res) => {
  try {
    res.status(200).json(await partService.deletePartTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPartTableById = async (req, res) => {
  try {
   res.status(200).json(await partService.getPartTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getUnitDropdown = async (req, res) => {
  try {
    res.status(200).json(await unitService.getUnitDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getPartTableList,
  getPartTableById,
  createPartTable,
  editPartTable,
  deletePartTable,
  getUnitDropdown,
};
