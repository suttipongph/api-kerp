const model = require("../model/warning_trans_model");
let createWarningTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWarningTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWarningTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWarningTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWarningTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWarningTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataWarningTrans = async (req) => {
  try {
    var warning_trans = await model.getDataWarningTransCode(req);
    if (warning_trans) {
      var lastWarningTransCode = warning_trans.warning_trans_code;
      let newlastWarningTransCode = 1;
      let codeForMat = "";
      if (lastWarningTransCode) {
        newlastWarningTransCode = parseInt(lastWarningTransCode) + 1;
      }
      if (newlastWarningTransCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastWarningTransCode;
        if (newlastWarningTransCode < 100) {
          codeForMat = "0" + "0" + newlastWarningTransCode;
          if (newlastWarningTransCode < 10) {
            codeForMat = "0" + newlastWarningTransCode;
          }
        }
      }
      return {
        warning_trans_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        warning_trans_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWarningTransTableList,
  getWarningTransTableById,
  createWarningTransTable,
  editWarningTransTable,
  deleteWarningTransTable,
  getWarningTransDropdown,
  getInitialDataWarningTrans,
};
