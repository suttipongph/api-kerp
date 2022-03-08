const model = require("../model/timeticket_trans_model");
let createTimeticketTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editTimeticketTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteTimeticketTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getTimeticketTransTableList,
  getTimeticketTransTableById,
  createTimeticketTransTable,
  editTimeticketTransTable,
  deleteTimeticketTransTable,
  getTimeticketTransDropdown,
};
