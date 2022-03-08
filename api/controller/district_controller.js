const districtService = require("../services/district_service");
const province_service = require("../services/province_service");
const respons = require("../shared/tools/respons_handler");
let createDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await districtService.createDistrictTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getDistrictTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await districtService.getDistrictTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await districtService.editDistrictTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteDistrictTable = async (req, res) => {
  try {
    res.status(200).json(await districtService.deleteDistrictTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getDistrictTableById = async (req, res) => {
  try {
   res.status(200).json(await districtService.getDistrictTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProvinceDropDown = async (req, res) => {
  try {
   res.status(200).json(await province_service.getProvinceDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getDistrictTableList,
  getDistrictTableById,
  createDistrictTable,
  editDistrictTable,
  deleteDistrictTable,
  getProvinceDropDown
};
