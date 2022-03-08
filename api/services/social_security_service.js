const model = require("../model/social_security_model");
let createSocialSecurityTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSocialSecurityTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSocialSecurityTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteSocialSecurityTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSocialSecurityTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSocialSecurityDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getSocialSecurityTableList,
  getSocialSecurityTableById,
  createSocialSecurityTable,
  editSocialSecurityTable,
  deleteSocialSecurityTable,
  getSocialSecurityDropdown
};
