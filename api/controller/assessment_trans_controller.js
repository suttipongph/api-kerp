const assessment_transService = require("../services/assessment_trans_service");
const employeeService = require("../services/employee_service");
const assessment_trans_type_service = require("../services/assessment_trans_type_service");
const respons = require("../shared/tools/respons_handler");
let createAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessment_transService.createAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAssessmentTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await assessment_transService.getAssessmentTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessment_transService.editAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessment_transService.deleteAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAssessmentTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessment_transService.getAssessmentTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getAssessmentTransCode = async (req, res) => {
  try {
    res.status(200).json(await assessment_transService.getAssessmentTransCode(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getAssessmentTransTypeDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await assessment_trans_type_service.getAssessmentTransTypeDropdown(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getAssessmentTransTableList,
  getAssessmentTransTableById,
  createAssessmentTransTable,
  editAssessmentTransTable,
  deleteAssessmentTransTable,
  getEmployeeDropdown,
  getAssessmentTransTypeDropDown,
  getAssessmentTransCode,
};
