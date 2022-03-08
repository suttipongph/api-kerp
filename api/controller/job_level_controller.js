const job_levelService = require("../services/job_level_services");
const positionService = require("../services/position_service");
const departmentService = require("../services/department_service");
const respons = require("../shared/tools/respons_handler");
let createJobLevelTable = async (req, res) => {
  try {
    res.status(200).json(await job_levelService.createJobLevelTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobLevelTableList = async (req, res) => {
  try {
    res.status(200).json(await job_levelService.getJobLevelTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobLevelTable = async (req, res) => {
  try {
    res.status(200).json(await job_levelService.editJobLevelTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobLevelTable = async (req, res) => {
  try {
    res.status(200).json(await job_levelService.deleteJobLevelTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobLevelTableById = async (req, res) => {
  try {
    res.status(200).json(await job_levelService.getJobLevelTableById(req));
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
      .json(await departmentService.getDepartmentDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getJobLevelTableList,
  getJobLevelTableById,
  createJobLevelTable,
  editJobLevelTable,
  deleteJobLevelTable,
  getPositionDropdown,
  getDepartmentDropdown,
};
