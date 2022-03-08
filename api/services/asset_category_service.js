const model = require("../model/asset_category_model");
let createAssetCategoryTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetCategoryTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAssetCategoryTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAssetCategoryTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetCategoryTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssetCategoryDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAssetCategory = async (req) => {
  try {
    var assets_category = await model.getAssetsCategoryCode(req);
    if (assets_category) {
      var lastAssetsCategoryCode = assets_category.asset_category_code;
      let newlastAssetsCategoryCode = 1;
      let codeForMat = "";
      if (lastAssetsCategoryCode) {
        newlastAssetsCategoryCode = parseInt(lastAssetsCategoryCode) + 1;
      }
      if (newlastAssetsCategoryCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastAssetsCategoryCode;
        if (newlastAssetsCategoryCode < 100) {
          codeForMat = "0" + "0" + newlastAssetsCategoryCode;
          if (newlastAssetsCategoryCode < 10) {
            codeForMat = "0" + newlastAssetsCategoryCode;
          }
        }
      }
      return {
        asset_category_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        asset_category_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAssetCategoryTableList,
  getAssetCategoryTableById,
  createAssetCategoryTable,
  editAssetCategoryTable,
  deleteAssetCategoryTable,
  getAssetCategoryDropdown,
  getInitialDataAssetCategory,
};
