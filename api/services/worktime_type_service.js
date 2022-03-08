const model = require("../model/worktime_type_model");
let createWorktimeTypeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTypeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWorktimeTypeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWorktimeTypeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTypeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTypeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWorktimeTypeTableList,
  getWorktimeTypeTableById,
  createWorktimeTypeTable,
  editWorktimeTypeTable,
  deleteWorktimeTypeTable,
  getWorktimeTypeDropdown
};
