const warehouseService = require("../services/warehouse_service");
const respons = require("../shared/tools/respons_handler");
let createWarehouseTable = async (req, res) => {
  try {
    res.status(200).json(await warehouseService.createWarehouseTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWarehouseTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warehouseService.getWarehouseTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWarehouseTable = async (req, res) => {
  try {
    res.status(200).json(await warehouseService.editWarehouseTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWarehouseTable = async (req, res) => {
  try {
    res.status(200).json(await warehouseService.deleteWarehouseTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWarehouseTableById = async (req, res) => {
  try {
   res.status(200).json(await warehouseService.getWarehouseTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getWarehouseTableList,
  getWarehouseTableById,
  createWarehouseTable,
  editWarehouseTable,
  deleteWarehouseTable,
};
