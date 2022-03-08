const access_rightsService = require("../services/access_rights_service");
const roleService = require("../services/role_service");
const respons = require("../shared/tools/respons_handler");
let createAccessRightsTable = async (req, res) => {
  try {
    res.status(200).json(await access_rightsService.createAccessRightsTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAccessRightsTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await access_rightsService.getAccessRightsTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAccessRightsTable = async (req, res) => {
  try {
    res.status(200).json(await access_rightsService.editAccessRightsTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAccessRightsTable = async (req, res) => {
  try {
    res.status(200).json(await access_rightsService.deleteAccessRightsTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAccessRightsTableById = async (req, res) => {
  try {
   res.status(200).json(await access_rightsService.getAccessRightsTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getRoleDropdown = async (req, res) => {
  try {
    res.status(200).json(await roleService.getRoleDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getAccessRightsTableList,
  getAccessRightsTableById,
  createAccessRightsTable,
  editAccessRightsTable,
  deleteAccessRightsTable,
  getRoleDropdown,
};
