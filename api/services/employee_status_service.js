const model = require("../model/employee_status_model");
let createEmployeeStatusTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeStatusTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editEmployeeStatusTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteEmployeeStatusTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeStatusTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeStatusDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getEmployeeStatusTableList,
  getEmployeeStatusTableById,
  createEmployeeStatusTable,
  editEmployeeStatusTable,
  deleteEmployeeStatusTable,
  getEmployeeStatusDropdown,
};
