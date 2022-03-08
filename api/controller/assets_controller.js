const assetsService = require("../services/assets_service");
const assetsCatagoryService = require("../services/asset_category_service");
const employeeService = require("../services/employee_service");
// const purchaseOrderService = require("../services/purchase_order_service");
const respons = require("../shared/tools/respons_handler");
let createAssetsTable = async (req, res) => {
  try {
    res.status(200).json(await assetsService.createAssetsTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAssetsTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assetsService.getAssetsTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAssetsTable = async (req, res) => {
  try {
    res.status(200).json(await assetsService.editAssetsTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAssetsTable = async (req, res) => {
  try {
    res.status(200).json(await assetsService.deleteAssetsTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAssetsTableById = async (req, res) => {
  try {
   res.status(200).json(await assetsService.getAssetsTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAssetsCatagoryDropdown = async (req, res) => {
  try {
    res.status(200).json(await assetsCatagoryService.getAssetCategoryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataAssets = async (req, res) => {
  try {
    res.status(200).json(await assetsService.getInitialDataAssets(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
// const getPurchaseOrderDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await purchaseOrderService.getPurchaseOrderDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
module.exports = {
  getAssetsTableList,
  getAssetsTableById,
  createAssetsTable,
  editAssetsTable,
  deleteAssetsTable,
  getAssetsCatagoryDropdown,
  getEmployeeDropDown,
  getInitialDataAssets
  // getPurchaseOrderDropdown,
};
