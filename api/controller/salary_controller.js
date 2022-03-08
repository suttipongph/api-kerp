const salaryService = require("../services/salary_service");
const respons = require("../shared/tools/respons_handler");
let createSalaryTable = async (req, res) => {
  try {
    res.status(200).json(await salaryService.createSalaryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSalaryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salaryService.getSalaryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSalaryTable = async (req, res) => {
  try {
    res.status(200).json(await salaryService.editSalaryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSalaryTable = async (req, res) => {
  try {
    res.status(200).json(await salaryService.deleteSalaryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSalaryTableById = async (req, res) => {
  try {
   res.status(200).json(await salaryService.getSalaryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getSalaryTableList,
  getSalaryTableById,
  createSalaryTable,
  editSalaryTable,
  deleteSalaryTable,
};
