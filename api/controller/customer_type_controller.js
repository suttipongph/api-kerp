const customer_typeService = require("../services/customer_type_service");
const respons = require("../shared/tools/respons_handler");
let createCustomerTypeTable = async (req, res) => {
  try {
    res.status(200).json(await customer_typeService.createCustomerTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCustomerTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await customer_typeService.getCustomerTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCustomerTypeTable = async (req, res) => {
  try {
    res.status(200).json(await customer_typeService.editCustomerTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCustomerTypeTable = async (req, res) => {
  try {
    res.status(200).json(await customer_typeService.deleteCustomerTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCustomerTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await customer_typeService.getCustomerTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCustomerTypeTableList,
  getCustomerTypeTableById,
  createCustomerTypeTable,
  editCustomerTypeTable,
  deleteCustomerTypeTable,
};
