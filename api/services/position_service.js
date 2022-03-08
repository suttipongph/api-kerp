const model = require("../model/position_model");
let createPositionTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editPositionTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deletePositionTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getFielChangeDropdown = async (req) => {
  try {
    const depId = req.body.conditions;

    return await model.getFielChangeDropdown(req, depId);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getPositionTableList,
  getPositionTableById,
  createPositionTable,
  editPositionTable,
  deletePositionTable,
  getPositionDropdown,
  getFielChangeDropdown,
};
