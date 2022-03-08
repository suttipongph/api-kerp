const model = require("../model/welfare_detail_model");
const employeeModel = require("../model/employee_model");
let createWelfareDetailTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareDetailTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWelfareDetailTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWelfareDetailTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareDetailTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareDetailDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWelfareUUIDByEmployeeTable = async (req) => {
  try {
    var welfareUUID = (await employeeModel.view(req)).welfare_uuid;
    if (welfareUUID != null) {
      return welfareUUID;
    } else {
      return null;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWelfareDetailTableList,
  getWelfareDetailTableById,
  createWelfareDetailTable,
  editWelfareDetailTable,
  deleteWelfareDetailTable,
  getWelfareDetailDropdown,
  getWelfareUUIDByEmployeeTable,
};
