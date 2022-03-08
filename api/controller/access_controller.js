const accessService = require("../services/access_service");
const subscribeTransService = require("../services/subscribe_trans_service");
const roleService = require("../services/role_service");
const respons = require("../shared/tools/respons_handler");
const subScribeTransService = require("../services/subscribe_trans_service");
let createAccessTable = async (req, res) => {
  try {
    res.status(200).json(await accessService.createAccessTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAccessTableList = async (req, res) => {
  try {
    res.status(200).json(await accessService.getAccessTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAccessTable = async (req, res) => {
  try {
    res.status(200).json(await accessService.editAccessTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAccessTable = async (req, res) => {
  try {
    res.status(200).json(await accessService.deleteAccessTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAccessTableById = async (req, res) => {
  try {
    res.status(200).json(await accessService.getAccessTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getSubscribeTransDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await subscribeTransService.getSubscribeTransDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getRoleDropdown = async (req, res) => {
  try {
    res.status(200).json(await roleService.getRoleDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSubscribeTransDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await subScribeTransService.getSubscribeTransDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getInitialdataForCoppyAccess = async (req, res) => {
  try {
    res.status(200).json(await accessService.getInitialdataForCoppyAccess(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let CopyAccessFeatureFromRole = async (req, res) => {
  try {
    res.status(200).json(await accessService.CopyAccessFeatureFromRole(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getAccessTableList,
  getAccessTableById,
  createAccessTable,
  editAccessTable,
  deleteAccessTable,
  getSubscribeTransDropdown,
  getRoleDropdown,
  getSubscribeTransDropDown,
  getInitialdataForCoppyAccess,
  CopyAccessFeatureFromRole,
};
