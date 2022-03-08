const model = require("../model/inventorytransection_model");
let createInventorytransectionTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInventorytransectionTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editInventorytransectionTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteInventorytransectionTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInventorytransectionTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInventorytransectionDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getInventorytransectionTableList,
  getInventorytransectionTableById,
  createInventorytransectionTable,
  editInventorytransectionTable,
  deleteInventorytransectionTable,
  getInventorytransectionDropdown
};
