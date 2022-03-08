const addressService = require("../services/address_service");
const employeeService = require("../services/employee_service");
const countryService = require("../services/country_service");
const provinceService = require("../services/province_service");
const districtService = require("../services/district_service");
const subDistrictService = require("../services/sub_district_service");
const respons = require("../shared/tools/respons_handler");
let createAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.createAddressTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAddressTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await addressService.getAddressTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.editAddressTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.deleteAddressTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAddressTableById = async (req, res) => {
  try {
   res.status(200).json(await addressService.getAddressTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getCountryDropdown = async (req, res) => {
  try {
    res.status(200).json(await countryService.getCountryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getProvinceDropdown = async (req, res) => {
  try {
    res.status(200).json(await provinceService.getProvinceDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDistrictDropdown = async (req, res) => {
  try {
    res.status(200).json(await districtService.getDistrictDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSubDistrictDropdown = async (req, res) => {
  try {
    res.status(200).json(await subDistrictService.getSubDistrictDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getAddressTableList,
  getAddressTableById,
  createAddressTable,
  editAddressTable,
  deleteAddressTable,
  getEmployeeDropdown,
  getCountryDropdown,
  getProvinceDropdown,
  getDistrictDropdown,
  getSubDistrictDropdown,
};
