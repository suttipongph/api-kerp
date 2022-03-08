const model = require("../model/welfare_model");
let createWelfareTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWelfareTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWelfareTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWelfareTableList,
  getWelfareTableById,
  createWelfareTable,
  editWelfareTable,
  deleteWelfareTable,
  getWelfareDropdown
};
