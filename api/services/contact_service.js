const model = require("../model/contact_model");
const employeemodel = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");
let createContactTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editContactTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteContactTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeDropDown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataContactTable = async (req) => {
  try {
    var employee_model = await employeemodel.view(req);
    employee_model["employee_id"] =
      employee_model.employee_code +
      " - " +
      employee_model.first_name +
      " " +
      employee_model.last_name;
    return {
      ref_id: employee_model.employee_id,
      ref_type: RefType.Employee,
      ref_uuid: employee_model.employee_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getContactTableList,
  getContactTableById,
  createContactTable,
  editContactTable,
  deleteContactTable,
  getContactDropdown,
  getEmployeeDropDown,
  getInitialDataContactTable,
};
