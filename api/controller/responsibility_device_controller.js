const responsibility_deviceService = require("../services/responsibility_device_service");
const assetsService = require("../services/assets_service");
const employeeService = require("../services/employee_service");
const documentStatusService = require("../services/document_status_service");
const respons = require("../shared/tools/respons_handler");
let createResponsibilityDeviceTable = async (req, res) => {
  try {
    res.status(200).json(await responsibility_deviceService.createResponsibilityDeviceTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getResponsibilityDeviceTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await responsibility_deviceService.getResponsibilityDeviceTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editResponsibilityDeviceTable = async (req, res) => {
  try {
    res.status(200).json(await responsibility_deviceService.editResponsibilityDeviceTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteResponsibilityDeviceTable = async (req, res) => {
  try {
    res.status(200).json(await responsibility_deviceService.deleteResponsibilityDeviceTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getResponsibilityDeviceTableById = async (req, res) => {
  try {
   res.status(200).json(await responsibility_deviceService.getResponsibilityDeviceTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAssetsDropdown = async (req, res) => {
  try {
    res.status(200).json(await assetsService.getAssetsDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropdown = async (req, res) => {
  try {
    res.status(200).json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getResponsibilityDeviceTableList,
  getResponsibilityDeviceTableById,
  createResponsibilityDeviceTable,
  editResponsibilityDeviceTable,
  deleteResponsibilityDeviceTable,
  getAssetsDropdown,
  getEmployeeDropdown,
  getDocumentStatusDropdown,
};
