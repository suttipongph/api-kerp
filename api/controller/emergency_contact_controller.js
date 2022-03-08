const emergency_contactService = require("../services/emergency_contact_service");
const addressService = require("../services/address_service");
const respons = require("../shared/tools/respons_handler");
const countryService = require("../services/country_service");
const provinceService = require("../services/province_service");
const districtService = require("../services/district_service");
const subDistrictService = require("../services/sub_district_service");
let createEmergencyContactTable = async (req, res) => {
  try {
    res.status(200).json(await emergency_contactService.createEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEmergencyContactTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergency_contactService.getEmergencyContactTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEmergencyContactTable = async (req, res) => {
  try {
    res.status(200).json(await emergency_contactService.editEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEmergencyContactTable = async (req, res) => {
  try {
    res.status(200).json(await emergency_contactService.deleteEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEmergencyContactTableById = async (req, res) => {
  try {
   res.status(200).json(await emergency_contactService.getEmergencyContactTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAddressDropdown = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressDropdown(req, res));
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
  getEmergencyContactTableList,
  getEmergencyContactTableById,
  createEmergencyContactTable,
  editEmergencyContactTable,
  deleteEmergencyContactTable,
  getAddressDropdown,
  getCountryDropdown,
  getProvinceDropdown,
  getDistrictDropdown,
  getSubDistrictDropdown,
};
