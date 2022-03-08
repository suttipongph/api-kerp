const item_category_tabelService = require("../services/item_category_tabel_service");
const respons = require("../shared/tools/respons_handler");
let createItemCategoryTabelTable = async (req, res) => {
  try {
    res.status(200).json(await item_category_tabelService.createItemCategoryTabelTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getItemCategoryTabelTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await item_category_tabelService.getItemCategoryTabelTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editItemCategoryTabelTable = async (req, res) => {
  try {
    res.status(200).json(await item_category_tabelService.editItemCategoryTabelTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteItemCategoryTabelTable = async (req, res) => {
  try {
    res.status(200).json(await item_category_tabelService.deleteItemCategoryTabelTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getItemCategoryTabelTableById = async (req, res) => {
  try {
   res.status(200).json(await item_category_tabelService.getItemCategoryTabelTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getItemCategoryTabelTableList,
  getItemCategoryTabelTableById,
  createItemCategoryTabelTable,
  editItemCategoryTabelTable,
  deleteItemCategoryTabelTable,
};
