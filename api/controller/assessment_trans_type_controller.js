const assessment_trans_typeService = require("../services/assessment_trans_type_service");
const respons = require("../shared/tools/respons_handler");
let createAssessmentTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await assessment_trans_typeService.createAssessmentTransTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAssessmentTransTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessment_trans_typeService.getAssessmentTransTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAssessmentTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await assessment_trans_typeService.editAssessmentTransTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAssessmentTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await assessment_trans_typeService.deleteAssessmentTransTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAssessmentTransTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await assessment_trans_typeService.getAssessmentTransTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getAssessmentTransTypeTableList,
  getAssessmentTransTypeTableById,
  createAssessmentTransTypeTable,
  editAssessmentTransTypeTable,
  deleteAssessmentTransTypeTable,
};
