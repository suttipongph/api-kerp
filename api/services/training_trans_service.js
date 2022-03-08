const model = require("../model/training_trans_model");
let createTrainingTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editTrainingTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteTrainingTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTrainingTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataTrainingTrans = async (req) => {
  try {
    var training_trans = await model.getTrainingTransCode(req);
    if (training_trans) {
      var lastTrainingTransCode = training_trans.training_trans_code;
      let newlastTrainingTransCode = 1;
      let codeForMat = "";
      if (lastTrainingTransCode) {
        newlastTrainingTransCode = parseInt(lastTrainingTransCode) + 1;
      }
      if (newlastTrainingTransCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastTrainingTransCode;
        if (newlastTrainingTransCode < 100) {
          codeForMat = "0" + "0" + newlastTrainingTransCode;
          if (newlastTrainingTransCode < 10) {
            codeForMat = "0" + newlastTrainingTransCode;
          }
        }
      }
      return {
        training_trans_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        training_trans_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getTrainingTransTableList,
  getTrainingTransTableById,
  createTrainingTransTable,
  editTrainingTransTable,
  deleteTrainingTransTable,
  getTrainingTransDropdown,
  getInitialDataTrainingTrans,
};
