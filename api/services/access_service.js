const model = require("../model/access_model");
const roleModel = require("../model/role_model");
let createAccessTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAccessTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAccessTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAccessTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAccessTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAccessDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialdataForCoppyAccess = async (req) => {
  try {
    var role = await roleModel.view(req);
    role.role_table_uuid = role.role_uuid;
    return role;
  } catch (e) {
    throw new Error(e.message);
  }
};

let CopyAccessFeatureFromRole = async (req) => {
  try {
    var access = await model.aceessFeatureListBySelectRoleCopy(req);

    var filterAccessFeature = await model.filterAccessFeature(req);

    if (filterAccessFeature.length != 0) {
      await model.copyAccessFeature(filterAccessFeature, req);
    }

    return access[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAccessTableList,
  getAccessTableById,
  createAccessTable,
  editAccessTable,
  deleteAccessTable,
  getAccessDropdown,
  getInitialdataForCoppyAccess,
  CopyAccessFeatureFromRole,
};
