const customer_branchService = require("../services/customer_branch_service");
const respons = require("../shared/tools/respons_handler");
let createCustomerBranchTable = async (req, res) => {
  try {
    res.status(200).json(await customer_branchService.createCustomerBranchTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCustomerBranchTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await customer_branchService.getCustomerBranchTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCustomerBranchTable = async (req, res) => {
  try {
    res.status(200).json(await customer_branchService.editCustomerBranchTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCustomerBranchTable = async (req, res) => {
  try {
    res.status(200).json(await customer_branchService.deleteCustomerBranchTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCustomerBranchTableById = async (req, res) => {
  try {
   res.status(200).json(await customer_branchService.getCustomerBranchTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCustomerBranchTableList,
  getCustomerBranchTableById,
  createCustomerBranchTable,
  editCustomerBranchTable,
  deleteCustomerBranchTable,
};
