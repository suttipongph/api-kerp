const model = require("../model/training_trans_detail_model");
let createTrainingTransDetailTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransDetailTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editTrainingTransDetailTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteTrainingTransDetailTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransDetailTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransDetailDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataTrainingTransDetail = async (req) => {
  try {
    var training_trans_detail = await model.getTrainingTransDetailCode(req);
    if (training_trans_detail) {
      var lastTrainingTransDetailCode =
        training_trans_detail.training_trans_detail_code;
      let newlastTrainingTransDetailCode = 1;
      let codeForMat = "";
      if (lastTrainingTransDetailCode) {
        newlastTrainingTransDetailCode =
          parseInt(lastTrainingTransDetailCode) + 1;
      }
      if (newlastTrainingTransDetailCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastTrainingTransDetailCode;
        if (newlastTrainingTransDetailCode < 100) {
          codeForMat = "0" + "0" + newlastTrainingTransDetailCode;
          if (newlastTrainingTransDetailCode < 10) {
            codeForMat = "0" + newlastTrainingTransDetailCode;
          }
        }
      }
      return {
        training_trans_detail_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        training_trans_detail_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getTrainingTransDetailTableList,
  getTrainingTransDetailTableById,
  createTrainingTransDetailTable,
  editTrainingTransDetailTable,
  deleteTrainingTransDetailTable,
  getTrainingTransDetailDropdown,
  getInitialDataTrainingTransDetail,
};
