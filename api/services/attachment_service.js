const model = require("../model/attachment_model");
const employee_model = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");
let createAttachmentTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAttachmentTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAttachmentTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAttachmentTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAttachmentTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAttachment = async (req) => {
  try {
    var employeemodel = await employee_model.view(req);
    employeemodel["employee_id"] =
      employeemodel.employee_code +
      " - " +
      employeemodel.first_name +
      " " +
      employeemodel.last_name;
    return {
      ref_id: employeemodel.employee_id,
      ref_type: RefType.Employee,
      ref_uuid: employee_model.employee_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getAttachmentDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAttachmentTableList,
  getAttachmentTableById,
  getInitialDataAttachment,
  createAttachmentTable,
  editAttachmentTable,
  deleteAttachmentTable,
  getAttachmentDropdown,
};
