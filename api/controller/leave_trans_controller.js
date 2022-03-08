const leave_transService = require("../services/leave_trans_service");
const leaveTransTypeService = require("../services/leave_trans_type_service");
const employeeService = require("../services/employee_service");
const documentStatusService = require("../services/document_status_service");
const departmenService = require("../services/department_service");
const positionService = require("../services/position_service");
const salaryService = require("../services/salary_service");
const respons = require("../shared/tools/respons_handler");
let createLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.createLeaveTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLeaveTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getLeaveTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editLeaveTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustLeaveTransStatus = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editAdjustLeaveTransStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustLeaveTransApprovedStatus = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editAdjustLeaveTransApprovedStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustLeaveTransComplateStatus = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editAdjustLeaveTransComplateStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustLeaveTransRejectStatus = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editAdjustLeaveTransRejectStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.deleteLeaveTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getLeaveTransTableById = async (req, res) => {
  try {
   res.status(200).json(await leave_transService.getLeaveTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getLeaveTransTypeDropdown = async (req, res) => {
  try {
    res.status(200).json(await leaveTransTypeService.getLeaveTransTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getAdjustLeaveTransInitialPostStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getAdjustLeaveTransInitialPostStatusData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustLeaveTransInitialApprovedStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getAdjustLeaveTransInitialApprovedStatusData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustLeaveTransInitialRejectStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getAdjustLeaveTransInitialRejectStatusData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustLeaveTransInitialComplateStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getAdjustLeaveTransInitialComplateStatusData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getDepartmentDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmenService.getDepartmentDropDown(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getPositionDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getSalaryDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salaryService.getSalaryDropdown(req, res));
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
const getDocumentStatusDropdown = async (req, res) => {
  try {
    res.status(200).json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialData = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.getInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getLeaveTransTableList,
  getLeaveTransTableById,
  createLeaveTransTable,
  editLeaveTransTable,
  deleteLeaveTransTable,
  getLeaveTransTypeDropdown,
  getEmployeeDropdown,
  getDocumentStatusDropdown,
  getInitialData,
  getAdjustLeaveTransInitialPostStatusData,
  getAdjustLeaveTransInitialApprovedStatusData,
  editAdjustLeaveTransRejectStatus,
  getAdjustLeaveTransInitialRejectStatusData,
  getDepartmentDropDown,
  getPositionDropDown,
  getSalaryDropDown,
  editAdjustLeaveTransStatus,
  editAdjustLeaveTransApprovedStatus,
  editAdjustLeaveTransComplateStatus,
  getAdjustLeaveTransInitialComplateStatusData
};
