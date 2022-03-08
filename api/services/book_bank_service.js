const model = require("../model/book_bank_model");
const EmpModel = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");
let createBookBankTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookBankTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editBookBankTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteBookBankTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookBankTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookBankDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getinitialdataOfBookBank = async (req) => {
  try {
    var employee_model = await EmpModel.view(req);
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
  getBookBankTableList,
  getBookBankTableById,
  createBookBankTable,
  editBookBankTable,
  deleteBookBankTable,
  getBookBankDropdown,
  getinitialdataOfBookBank,
};
