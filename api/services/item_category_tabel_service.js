const model = require("../model/item_category_tabel_model");
let createItemCategoryTabelTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getItemCategoryTabelTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editItemCategoryTabelTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteItemCategoryTabelTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getItemCategoryTabelTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getItemCategoryTabelDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getItemCategoryTabelTableList,
  getItemCategoryTabelTableById,
  createItemCategoryTabelTable,
  editItemCategoryTabelTable,
  deleteItemCategoryTabelTable,
  getItemCategoryTabelDropdown
};
