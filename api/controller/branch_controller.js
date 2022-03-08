const branchService = require("../services/branch_service");
const respons = require("../shared/tools/respons_handler");
let createBranchTable = async (req, res) => {
  try {
    res.status(200).json(await branchService.createBranchTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBranchTableList = async (req, res) => {
  try {
    res.status(200).json(await branchService.getBranchTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBranchTable = async (req, res) => {
  try {
    res.status(200).json(await branchService.editBranchTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBranchTable = async (req, res) => {
  try {
    res.status(200).json(await branchService.deleteBranchTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBranchTableById = async (req, res) => {
  try {
    res.status(200).json(await branchService.getBranchTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getListBranchForPage = async (req, res) => {
  try {
    res.status(200).json(await branchService.getListBranchForPage(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
module.exports = {
  getBranchTableList,
  getBranchTableById,
  createBranchTable,
  editBranchTable,
  deleteBranchTable,
  getListBranchForPage,
};
