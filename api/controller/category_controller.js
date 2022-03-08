const categoryService = require("../services/category_service");
const respons = require("../shared/tools/respons_handler");
let createCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await categoryService.createCategoryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCategoryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await categoryService.getCategoryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await categoryService.editCategoryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCategoryTable = async (req, res) => {
  try {
    res.status(200).json(await categoryService.deleteCategoryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCategoryTableById = async (req, res) => {
  try {
   res.status(200).json(await categoryService.getCategoryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCategoryTableList,
  getCategoryTableById,
  createCategoryTable,
  editCategoryTable,
  deleteCategoryTable,
};
