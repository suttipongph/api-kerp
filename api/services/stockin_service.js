const model = require("../model/stockin_model");
let createStockinTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getStockinTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editStockinTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteStockinTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getStockinTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getStockinDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getStockinTableList,
  getStockinTableById,
  createStockinTable,
  editStockinTable,
  deleteStockinTable,
  getStockinDropdown
};
