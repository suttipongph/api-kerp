const sub_districtService = require("../services/sub_district_service");
const district_service = require("../services/district_service");
const respons = require("../shared/tools/respons_handler");
let createSubDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await sub_districtService.createSubDistrictTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSubDistrictTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await sub_districtService.getSubDistrictTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSubDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await sub_districtService.editSubDistrictTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSubDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await sub_districtService.deleteSubDistrictTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSubDistrictTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await sub_districtService.getSubDistrictTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getDistrictDropDown = async (req, res) => {
  try {
    res.status(200).json(await district_service.getDistrictDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getSubDistrictTableList,
  getSubDistrictTableById,
  createSubDistrictTable,
  editSubDistrictTable,
  deleteSubDistrictTable,
  getDistrictDropDown,
};
