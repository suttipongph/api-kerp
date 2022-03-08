const provinceService = require("../services/province_service");
const respons = require("../shared/tools/respons_handler");
const countryService = require("../services/country_service");
let createProvinceTable = async (req, res) => {
  try {
    res.status(200).json(await provinceService.createProvinceTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getProvinceTableList = async (req, res) => {
  try {
    res.status(200).json(await provinceService.getProvinceTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editProvinceTable = async (req, res) => {
  try {
    res.status(200).json(await provinceService.editProvinceTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteProvinceTable = async (req, res) => {
  try {
    res.status(200).json(await provinceService.deleteProvinceTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getProvinceTableById = async (req, res) => {
  try {
    res.status(200).json(await provinceService.getProvinceTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getCountryDropDown = async (req, res) => {
  try {
    res.status(200).json(await countryService.getCountryDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getProvinceTableList,
  getProvinceTableById,
  createProvinceTable,
  editProvinceTable,
  deleteProvinceTable,
  getCountryDropDown,
};
