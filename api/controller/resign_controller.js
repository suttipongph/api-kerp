const resignService = require("../services/resign_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const positionService = require("../services/position_service");
const salaryService = require("../services/salary_service");
const welfare_service = require("../services/welfare_service");
const employee_status_service = require("../services/employee_status_service");
const backtoworkService = require("../services/backtowork_service");
const documentstatusService = require("../services/document_status_service");
const respons = require("../shared/tools/respons_handler");
let createResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.createResignTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getResignTableList = async (req, res) => {
  try {
    res.status(200).json(await resignService.getResignTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.editResignTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.deleteResignTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getResignTableById = async (req, res) => {
  try {
    res.status(200).json(await resignService.getResignTableById(req));
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
const getDocumentStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await documentstatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeTableById = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeTableById(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getDepartmentDropdown = async (req, res) => {
  try {
    res.status(200).json(await departmentService.getDepartmentDropdown(req));
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
const getSalaryDropDown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getEmployeeStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employee_status_service.getEmployeeStatusDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editEmployeeStatusBacktoworkTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.editEmployeeStatusBacktoworkTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustResignPostStatus = async (req, res) => {
  try {
    res.status(200).json(await resignService.editAdjustResignPostStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustResignApprovedStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.editAdjustResignApprovedStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustResignComplateStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.editAdjustResignComplateStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editAdjustResignStatus = async (req, res) => {
  try {
    res.status(200).json(await resignService.editAdjustResignStatus(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const getAdjustBacktoworkInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.getAdjustBacktoworkInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const createBacktoworkTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await backtoworkService.createBacktoworkTable(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.getAdjustResignInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialPostStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.getAdjustResignInitialPostStatusData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialApprovedStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await resignService.getAdjustResignInitialApprovedStatusData(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialRejectStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await resignService.getAdjustResignInitialRejectStatusData(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialComplateStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await resignService.getAdjustResignInitialComplateStatusData(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getWelfareDropDown = async (req, res) => {
  try {
    res.status(200).json(await welfare_service.getWelfareDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editRejectResignAndCreateRejectTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.editRejectResignAndCreateRejectTrans(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getWelfareDropDown,
  getResignTableList,
  getResignTableById,
  createResignTable,
  editResignTable,
  deleteResignTable,
  getEmployeeDropdown,
  getDepartmentDropdown,
  getEmployeeTableById,
  getPositionDropdown,
  getSalaryDropDown,
  getEmployeeStatusDropDown,
  editEmployeeStatusBacktoworkTable,
  editAdjustResignStatus,
  getAdjustBacktoworkInitialData,
  createBacktoworkTable,
  getDocumentStatusDropDown,
  getAdjustResignInitialData,
  getEmployeeDropDown,
  editAdjustResignPostStatus,
  editAdjustResignApprovedStatus,
  editAdjustResignComplateStatus,
  getAdjustResignInitialPostStatusData,
  getAdjustResignInitialApprovedStatusData,
  getAdjustResignInitialRejectStatusData,
  getAdjustResignInitialComplateStatusData,
  editRejectResignAndCreateRejectTrans,
};
