const overtimeService = require("../services/overtime_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const positionService = require("../services/position_service");
const respons = require("../shared/tools/respons_handler");
const docStatusService = require("../services/document_status_service");

let createOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.createOvertimeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getOvertimeTableList = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.getOvertimeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.editOvertimeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.deleteOvertimeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getOvertimeTableById = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.getOvertimeTableById(req));
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
const getDepartmentDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmentService.getDepartmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await docStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

const getOvertimePostInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimePostInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getOvertimeApproveInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimeApproveInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getOvertimeCompleteInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimeCompleteInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getOvertimeRejectInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimeRejectInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

const editRejectOvertime = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.editRejectOvertime(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getOvertimeTableList,
  getOvertimeTableById,
  createOvertimeTable,
  editOvertimeTable,
  deleteOvertimeTable,
  getEmployeeDropdown,
  getDepartmentDropdown,
  getPositionDropdown,
  getDocumentStatusDropDown,
  getEmployeeDropDown,
  getOvertimePostInitialData,
  getOvertimeApproveInitialData,
  getOvertimeCompleteInitialData,
  getOvertimeRejectInitialData,
  editRejectOvertime,
};
