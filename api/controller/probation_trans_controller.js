const probation_transService = require("../services/probation_trans_service");
const positionService = require("../services/position_service");
const departmentService = require("../services/department_service");
const employeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
const documentStatusService = require("../services/document_status_service");
let createProbationTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.createProbationTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getProbationTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.getProbationTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editProbationTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.editProbationTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteProbationTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.deleteProbationTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getProbationTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.getProbationTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDepartmentDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmentService.getDepartmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getInitialDataProbationPostStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.getInitialDataProbationPostStatus(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProbationTransTableLeadList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.getProbationTransTableLeadList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let getInitialDataProbationCancelStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.getInitialDataProbationCancelStatus(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProbationTransTableHrList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.getProbationTransTableHrList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataProbationCompleteStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.getInitialDataProbationCompleteStatus(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editProbationCompleteStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(await probation_transService.CompleteProbationTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editProbationCancelStatusAndCreateReject = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await probation_transService.editProbationCancelStatusAndCreateReject(
          req
        )
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getProbationTransTableList,
  getProbationTransTableById,
  createProbationTransTable,
  editProbationTransTable,
  deleteProbationTransTable,
  getPositionDropdown,
  getDepartmentDropdown,
  getEmployeeDropdown,
  getInitialDataProbationPostStatus,
  getDocumentStatusDropDown,
  getProbationTransTableLeadList,
  getInitialDataProbationCancelStatus,
  getProbationTransTableHrList,
  getInitialDataProbationCompleteStatus,
  editProbationCompleteStatus,
  editProbationCancelStatusAndCreateReject,
};
