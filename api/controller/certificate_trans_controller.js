const certificate_transService = require("../services/certificate_trans_service");
const certificateTpyeService = require("../services/certificate_type_service");
const employeeService = require("../services/employee_service");
const salaryService = require("../services/salary_service");
const positionService = require("../services/position_service");
const respons = require("../shared/tools/respons_handler");
let createCertificateTransTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_transService.createCertificateTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCertificateTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_transService.getCertificateTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCertificateTransTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_transService.editCertificateTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCertificateTransTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_transService.deleteCertificateTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCertificateTransTableById = async (req, res) => {
  try {
   res.status(200).json(await certificate_transService.getCertificateTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getCertificateTpyeDropdown = async (req, res) => {
  try {
    res.status(200).json(await certificateTpyeService.getCertificateTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSalaryDropdown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getCertificateTransTableList,
  getCertificateTransTableById,
  createCertificateTransTable,
  editCertificateTransTable,
  deleteCertificateTransTable,
  getCertificateTpyeDropdown,
  getEmployeeDropdown,
  getSalaryDropdown,
  getPositionDropdown,
};
