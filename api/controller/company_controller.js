const companyService = require("../services/company_service");
const branchService = require("../services/branch_service");
const respons = require("../shared/tools/respons_handler");
let createCompanyTable = async (req, res) => {
  try {
    res.status(200).json(await companyService.createCompanyTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCompanyTableList = async (req, res) => {
  try {
    res.status(200).json(await companyService.getCompanyTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCompanyTable = async (req, res) => {
  try {
    res.status(200).json(await companyService.editCompanyTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCompanyTable = async (req, res) => {
  try {
    res.status(200).json(await companyService.deleteCompanyTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCompanyTableById = async (req, res) => {
  try {
    res.status(200).json(await companyService.getCompanyTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getBranchDropdown = async (req, res) => {
  try {
    res.status(200).json(await branchService.getBranchDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getCompanyTableList,
  getCompanyTableById,
  createCompanyTable,
  editCompanyTable,
  deleteCompanyTable,
  getBranchDropdown,
};
