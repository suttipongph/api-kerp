const inventorytransectionService = require("../services/inventorytransection_service");
const partService = require("../services/part_service");
const respons = require("../shared/tools/respons_handler");
let createInventorytransectionTable = async (req, res) => {
  try {
    res.status(200).json(await inventorytransectionService.createInventorytransectionTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getInventorytransectionTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await inventorytransectionService.getInventorytransectionTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editInventorytransectionTable = async (req, res) => {
  try {
    res.status(200).json(await inventorytransectionService.editInventorytransectionTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteInventorytransectionTable = async (req, res) => {
  try {
    res.status(200).json(await inventorytransectionService.deleteInventorytransectionTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getInventorytransectionTableById = async (req, res) => {
  try {
   res.status(200).json(await inventorytransectionService.getInventorytransectionTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getPartDropdown = async (req, res) => {
  try {
    res.status(200).json(await partService.getPartDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getInventorytransectionTableList,
  getInventorytransectionTableById,
  createInventorytransectionTable,
  editInventorytransectionTable,
  deleteInventorytransectionTable,
  getPartDropdown,
};
