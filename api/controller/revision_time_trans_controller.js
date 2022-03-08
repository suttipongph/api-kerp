const revision_time_transService = require("../services/revision_time_trans_service");
const documentStatusService = require("../services/document_status_service");
const depService = require("../services/department_service");
const posService = require("../services/position_service");
const empService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.createRevisionTimeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRevisionTimeTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await revision_time_transService.getRevisionTimeTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.editRevisionTimeTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.deleteRevisionTimeTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRevisionTimeTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await revision_time_transService.getRevisionTimeTransTableById(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getDocumentStatusDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await empService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPostInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.getPostInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropDown = async (req, res) => {
  try {
    res.status(200).json(await posService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDepartmentDropdown = async (req, res) => {
  try {
    res.status(200).json(await depService.getDepartmentDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let postRevitionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.editRevisionTimeTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const getCancelInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.getCancelInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

let cancelRevitionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.cancelRevitionTimeTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};

const getCompleteInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await revision_time_transService.getCompleteInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

let completeRevitionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await revision_time_transService.completeRevitionTimeTransTable(req)
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
module.exports = {
  getRevisionTimeTransTableList,
  getRevisionTimeTransTableById,
  createRevisionTimeTransTable,
  editRevisionTimeTransTable,
  deleteRevisionTimeTransTable,
  getDocumentStatusDropdown,
  getEmployeeDropDown,
  getPostInitialData,
  getPositionDropDown,
  getDepartmentDropdown,
  postRevitionTimeTransTable,
  cancelRevitionTimeTransTable,
  getCancelInitialData,
  getCompleteInitialData,
  completeRevitionTimeTransTable,
};
