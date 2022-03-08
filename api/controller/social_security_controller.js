const social_securityService = require("../services/social_security_service");
const respons = require("../shared/tools/respons_handler");
let createSocialSecurityTable = async (req, res) => {
  try {
    res.status(200).json(await social_securityService.createSocialSecurityTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSocialSecurityTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await social_securityService.getSocialSecurityTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSocialSecurityTable = async (req, res) => {
  try {
    res.status(200).json(await social_securityService.editSocialSecurityTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSocialSecurityTable = async (req, res) => {
  try {
    res.status(200).json(await social_securityService.deleteSocialSecurityTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSocialSecurityTableById = async (req, res) => {
  try {
   res.status(200).json(await social_securityService.getSocialSecurityTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getSocialSecurityTableList,
  getSocialSecurityTableById,
  createSocialSecurityTable,
  editSocialSecurityTable,
  deleteSocialSecurityTable,
};
