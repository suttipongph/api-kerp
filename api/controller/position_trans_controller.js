const position_transService = require("../services/position_trans_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const positionService = require("../services/position_service");
const respons = require("../shared/tools/respons_handler");
const documentStatusServicve = require("../services/document_status_service");

let createPositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.createPositionTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPositionTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.getPositionTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.editPositionTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.deletePositionTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPositionTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.getPositionTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataPostAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.getInitialDataPostAdjustPosition(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataComplateAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await position_transService.getInitialDataComplateAdjustPosition(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataCancelAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await position_transService.getInitialDataCancelAdjustPosition(req)
      );
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
let getPositionTransTableHRList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.getPositionTransTableHRList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getPositionTransTableLeadList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await position_transService.getPositionTransTableLeadList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getDocumentStatusDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await documentStatusServicve.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let ComplateAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(await position_transService.ComplateAdjustPosition(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const getFielChangeDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getFielChangeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

let editCancelStatusAndCreateRejectTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await position_transService.editCancelStatusAndCreateRejectTransTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getPositionTransTableList,
  getPositionTransTableById,
  createPositionTransTable,
  editPositionTransTable,
  deletePositionTransTable,
  getEmployeeDropdown,
  getDepartmentDropdown,
  getPositionDropdown,
  getPositionTransTableHRList,
  getPositionTransTableLeadList,
  getDocumentStatusDropdown,
  getInitialDataPostAdjustPosition,
  getInitialDataComplateAdjustPosition,
  ComplateAdjustPosition,
  getInitialDataCancelAdjustPosition,
  getFielChangeDropdown,
  editCancelStatusAndCreateRejectTransTable,
};
