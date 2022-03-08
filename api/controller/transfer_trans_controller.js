const transfer_transService = require("../services/transfer_trans_service");
const positionService = require("../services/position_service");
const departmentService = require("../services/department_service");
const employeeService = require("../services/employee_service");
const DocStatusService = require("../services/document_status_service");

const respons = require("../shared/tools/respons_handler");
let createTransferTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.createTransferTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTransferTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.getTransferTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTransferTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.editTransferTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTransferTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.deleteTransferTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTransferTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.getTransferTransTableById(req));
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
      .json(await DocStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataAdjustPostTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await transfer_transService.getInitialDataAdjustPostTransfer(req, res)
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

const editAdjustTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(await transfer_transService.editAdjustTransfer(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const getInitialDataAdjustCancelTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await transfer_transService.getInitialDataAdjustCancelTransfer(req, res)
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataAdjustCompleteTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await transfer_transService.getInitialDataAdjustCompleteTransfer(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

const editTransferTransTableComplete = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await transfer_transService.editTransferTransTableComplete(req, res)
      );
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
const editCancelTransferAndCreateRejectTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await transfer_transService.editCancelTransferAndCreateRejectTrans(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getTransferTransTableList,
  getTransferTransTableById,
  createTransferTransTable,
  editTransferTransTable,
  deleteTransferTransTable,
  getPositionDropdown,
  getDepartmentDropdown,
  getEmployeeDropdown,
  getDocumentStatusDropDown,
  getInitialDataAdjustPostTransfer,
  editAdjustTransfer,
  getInitialDataAdjustCancelTransfer,
  getInitialDataAdjustCompleteTransfer,
  editTransferTransTableComplete,
  getFielChangeDropdown,
  editCancelTransferAndCreateRejectTrans,
};
