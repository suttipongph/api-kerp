const model = require("../model/assets_model");
let createAssetsTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetsTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAssetsTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAssetsTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetsTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetsDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAssets = async (req) => {
  try {
    var assets = await model.getAssetsCode(req);
    if (assets) {
      var lastAssetsCode = assets.assets_code;
      let newlastAssetsCode = 1;
      let codeForMat = "";
      if (lastAssetsCode) {
        newlastAssetsCode = parseInt(lastAssetsCode) + 1;
      }
      if (newlastAssetsCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastAssetsCode;
        if (newlastAssetsCode < 100) {
          codeForMat = "0" + "0" + newlastAssetsCode;
          if (newlastAssetsCode < 10) {
            codeForMat = "0" + newlastAssetsCode;
          }
        }
      }
      return {
        assets_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        assets_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAssetsTableList,
  getAssetsTableById,
  createAssetsTable,
  editAssetsTable,
  deleteAssetsTable,
  getAssetsDropdown,
  getInitialDataAssets,
};
