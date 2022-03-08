const model = require("../model/address_model");
const employeemodel = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");
let createAddressTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAddressTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAddressTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAddressTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAddressTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAddressDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAddressTable = async (req) => {
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
  getAddressTableList,
  getAddressTableById,
  createAddressTable,
  editAddressTable,
  deleteAddressTable,
  getAddressDropdown,
  getInitialDataAddressTable,
};
