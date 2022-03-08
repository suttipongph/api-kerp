const asset_categoryService = require("../services/asset_category_service");
const respons = require("../shared/tools/respons_handler");
let createAssetCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await asset_categoryService.createAssetCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAssetCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await asset_categoryService.getAssetCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAssetCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await asset_categoryService.editAssetCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAssetCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await asset_categoryService.deleteAssetCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAssetCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await asset_categoryService.getAssetCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataAssetCategory = async (req, res) => {
  try {
   res.status(200).json(await asset_categoryService.getInitialDataAssetCategory(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getAssetCategoryTableList,
  getAssetCategoryTableById,
  createAssetCategoryTable,
  editAssetCategoryTable,
  deleteAssetCategoryTable,
  getInitialDataAssetCategory
};
