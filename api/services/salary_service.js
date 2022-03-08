const model = require("../model/salary_model");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  SalaryTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
let createSalaryTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSalaryTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteSalaryTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getSalaryTableList,
  getSalaryTableById,
  createSalaryTable,
  editSalaryTable,
  deleteSalaryTable,
  getSalaryDropdown,
};
