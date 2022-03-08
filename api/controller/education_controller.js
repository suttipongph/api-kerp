const educationService = require("../services/education_service");
const respons = require("../shared/tools/respons_handler");
const countryService = require("../services/country_service");
const provinceService = require("../services/province_service");
const employeeService = require("../services/employee_service");
let createEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.createEducationTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEducationTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await educationService.getEducationTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.editEducationTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.deleteEducationTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEducationTableById = async (req, res) => {
  try {
    res.status(200).json(await educationService.getEducationTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getCountryDropdown = async (req, res) => {
  try {
    res.status(200).json(await countryService.getCountryDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProvinceDropdown = async (req, res) => {
  try {
    res.status(200).json(await provinceService.getProvinceDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getEducationTableList,
  getEducationTableById,
  createEducationTable,
  editEducationTable,
  deleteEducationTable,
  getCountryDropdown,
  getProvinceDropdown,
  getEmployeeDropDown,
};
