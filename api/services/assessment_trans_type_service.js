const model = require("../model/assessment_trans_type_model");
let createAssessmentTransTypeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransTypeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAssessmentTransTypeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteAssessmentTransTypeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransTypeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAssessmentTransTypeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getAssessmentTransTypeTableList,
  getAssessmentTransTypeTableById,
  createAssessmentTransTypeTable,
  editAssessmentTransTypeTable,
  deleteAssessmentTransTypeTable,
  getAssessmentTransTypeDropdown,
};
