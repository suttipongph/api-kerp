const model = require("../model/assessment_trans_model");
let createAssessmentTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAssessmentTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAssessmentTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransCode = async (req) => {
  try {
    var assessment_trans = await model.getAssessmentTransCode(req);
    if (assessment_trans) {
      var lastAssessmentTransCode = assessment_trans.assessment_trans_code;
      let newlastAssessmentTransCode = 1;
      let codeForMat = "";
      if (lastAssessmentTransCode) {
        newlastAssessmentTransCode = parseInt(lastAssessmentTransCode) + 1;
      }
      if (newlastAssessmentTransCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastAssessmentTransCode;
        if (newlastAssessmentTransCode < 100) {
          codeForMat = "0" + "0" + newlastAssessmentTransCode;
          if (newlastAssessmentTransCode < 10) {
            codeForMat = "0" + newlastAssessmentTransCode;
          }
        }
      }
      return {
        assessment_trans_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        assessment_trans_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAssessmentTransTableList,
  getAssessmentTransTableById,
  createAssessmentTransTable,
  editAssessmentTransTable,
  deleteAssessmentTransTable,
  getAssessmentTransDropdown,
  getAssessmentTransCode,
};
