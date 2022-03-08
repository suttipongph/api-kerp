const model = require("../model/emergency_contact_model");

const employeemodel = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");
let createEmergencyContactTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmergencyContactTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editEmergencyContactTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteEmergencyContactTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmergencyContactTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmergencyContactDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialDataEmergencyContactTable = async (req) => {
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
  getEmergencyContactTableList,
  getEmergencyContactTableById,
  createEmergencyContactTable,
  editEmergencyContactTable,
  deleteEmergencyContactTable,
  getEmergencyContactDropdown,
  getInitialDataEmergencyContactTable,
};
