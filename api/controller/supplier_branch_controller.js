const supplier_branchService = require("../services/supplier_branch_service");
const respons = require("../shared/tools/respons_handler");
let createSupplierBranchTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_branchService.createSupplierBranchTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSupplierBranchTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await supplier_branchService.getSupplierBranchTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSupplierBranchTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_branchService.editSupplierBranchTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSupplierBranchTable = async (req, res) => {
  try {
    res.status(200).json(await supplier_branchService.deleteSupplierBranchTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSupplierBranchTableById = async (req, res) => {
  try {
   res.status(200).json(await supplier_branchService.getSupplierBranchTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getSupplierBranchTableList,
  getSupplierBranchTableById,
  createSupplierBranchTable,
  editSupplierBranchTable,
  deleteSupplierBranchTable,
};
