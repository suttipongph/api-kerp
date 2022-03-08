const model = require("../model/branch_model");
let createBranchTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBranchTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editBranchTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteBranchTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBranchTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBranchDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getListBranchForPage = async (req) => {
  try {
    return await model.getListBranchPage(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getBranchTableList,
  getBranchTableById,
  createBranchTable,
  editBranchTable,
  deleteBranchTable,
  getBranchDropdown,
  getListBranchForPage,
};
