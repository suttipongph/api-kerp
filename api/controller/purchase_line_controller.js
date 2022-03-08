const purchase_lineService = require("../services/purchase_line_service");
const warehouseService = require("../services/warehouse_service");
const respons = require("../shared/tools/respons_handler");
let createPurchaseLineTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_lineService.createPurchaseLineTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPurchaseLineTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await purchase_lineService.getPurchaseLineTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPurchaseLineTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_lineService.editPurchaseLineTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePurchaseLineTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_lineService.deletePurchaseLineTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPurchaseLineTableById = async (req, res) => {
  try {
   res.status(200).json(await purchase_lineService.getPurchaseLineTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getWarehouseDropdown = async (req, res) => {
  try {
    res.status(200).json(await warehouseService.getWarehouseDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getPurchaseLineTableList,
  getPurchaseLineTableById,
  createPurchaseLineTable,
  editPurchaseLineTable,
  deletePurchaseLineTable,
  getWarehouseDropdown,
};
