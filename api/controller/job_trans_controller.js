const job_transService = require("../services/job_trans_service");
const jobService = require("../services/job_service");
const employeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.createJobTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await job_transService.getJobTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.editJobTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.deleteJobTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobTransTableById = async (req, res) => {
  try {
   res.status(200).json(await job_transService.getJobTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getJobDropdown = async (req, res) => {
  try {
    res.status(200).json(await jobService.getJobDropdown(req, res));
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
const getInitialDataJobTrans = async (req, res) => {
  try {
    res.status(200).json(await job_transService.getInitialDataJobTrans(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getJobTransTableList,
  getJobTransTableById,
  createJobTransTable,
  editJobTransTable,
  deleteJobTransTable,
  getJobDropdown,
  getEmployeeDropdown,
  getInitialDataJobTrans
};
