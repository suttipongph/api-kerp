const model = require("../model/onsite_model");
let createOnsiteTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOnsiteTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editOnsiteTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteOnsiteTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOnsiteTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOnsiteDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataOnsite = async (req) => {
  try {
    var onsite_trans = await model.getOnsiteCode(req);
    if (onsite_trans) {
      var lastOnsiteCode = onsite_trans.onsite_code;
      let newlastOnsiteCode = 1;
      let codeForMat = "";
      if (lastOnsiteCode) {
        newlastOnsiteCode = parseInt(lastOnsiteCode) + 1;
      }
      if (newlastOnsiteCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastOnsiteCode;
        if (newlastOnsiteCode < 100) {
          codeForMat = "0" + "0" + newlastOnsiteCode;
          if (newlastOnsiteCode < 10) {
            codeForMat = "0" + newlastOnsiteCode;
          }
        }
      }
      return {
        onsite_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        onsite_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getOnsiteTableList,
  getOnsiteTableById,
  createOnsiteTable,
  editOnsiteTable,
  deleteOnsiteTable,
  getOnsiteDropdown,
  getInitialDataOnsite,
};
