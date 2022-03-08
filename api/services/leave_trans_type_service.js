const model = require("../model/leave_trans_type_model");
let createLeaveTransTypeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTypeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editLeaveTransTypeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteLeaveTransTypeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTypeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTypeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTypeCode = async (req) => {
  try {
    var leave_trans = await model.getLeaveTransTypeCode(req);
    var lastLeaveTransTypeCode = leave_trans.leave_trans_type_code;
    let newLeaveTransTypeCode = 1;
    let codeForMat = "";
    if (lastLeaveTransTypeCode != null) {
      newLeaveTransTypeCode = parseInt(lastLeaveTransTypeCode) + 1;
    }
    if (newLeaveTransTypeCode < 1000) {
      codeForMat = "0" + "0" + "0" + newLeaveTransTypeCode;
      if (newLeaveTransTypeCode < 100) {
        codeForMat = "0" + "0" + newLeaveTransTypeCode;
        if (newLeaveTransTypeCode < 10) {
          codeForMat = "0" + newLeaveTransTypeCode;
        }
      }
    }
    return {
      leave_trans_type_code: codeForMat,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getLeaveTransTypeTableList,
  getLeaveTransTypeTableById,
  createLeaveTransTypeTable,
  editLeaveTransTypeTable,
  deleteLeaveTransTypeTable,
  getLeaveTransTypeDropdown,
  getLeaveTransTypeCode,
};
