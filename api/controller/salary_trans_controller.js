const salary_transService = require("../services/salary_trans_service");
const positionService = require("../services/position_service");
const departmentService = require("../services/department_service");
const employeeService = require("../services/employee_service");
const salaryService = require("../services/salary_service");
const docStatusService = require("../services/document_status_service");
const respons = require("../shared/tools/respons_handler");
let createSalaryTransTable = async (req, res) => {
  try {
    res.status(200).json(await salary_transService.createSalaryTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSalaryTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salary_transService.getSalaryTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSalaryTransTable = async (req, res) => {
  try {
    res.status(200).json(await salary_transService.editSalaryTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSalaryTransTable = async (req, res) => {
  try {
    res.status(200).json(await salary_transService.deleteSalaryTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSalaryTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salary_transService.getSalaryTransTableById(req));
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

const getSalaryDropdown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req, res));
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

let getInitialAdjustSalaryPostStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salary_transService.getInitialAdjustSalaryPostStatus(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialAdjustSalaryCancelStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salary_transService.getInitialAdjustSalaryCancelStatus(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialAdjustSalaryCompleteStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await salary_transService.getInitialAdjustSalaryCompleteStatus(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editSalaryTransTableComplete = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salary_transService.editSalaryTransTableComplete(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editCancelStatusAndCreateRejectTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await salary_transService.editCancelStatusAndCreateRejectTransTable(req)
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getSalaryTransTableList,
  getSalaryTransTableById,
  createSalaryTransTable,
  editSalaryTransTable,
  deleteSalaryTransTable,
  getPositionDropdown,
  getDepartmentDropdown,
  getEmployeeDropdown,
  getSalaryDropdown,
  getDocumentStatusDropDown,
  getInitialAdjustSalaryPostStatus,
  getInitialAdjustSalaryCancelStatus,
  getInitialAdjustSalaryCompleteStatus,
  editSalaryTransTableComplete,
  editCancelStatusAndCreateRejectTransTable,
};
