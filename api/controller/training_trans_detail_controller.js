const training_trans_detailService = require("../services/training_trans_detail_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const positionService = require("../services/position_service");
const trainingTransService = require("../services/training_trans_service");
const trainingTransDetailService = require("../services/training_trans_detail_service");
const respons = require("../shared/tools/respons_handler");
let createTrainingTransDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await training_trans_detailService.createTrainingTransDetailTable(req)
      );
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTrainingTransDetailTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await training_trans_detailService.getTrainingTransDetailTableList(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTrainingTransDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await training_trans_detailService.editTrainingTransDetailTable(req)
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTrainingTransDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await training_trans_detailService.deleteTrainingTransDetailTable(req)
      );
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTrainingTransDetailTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await training_trans_detailService.getTrainingTransDetailTableById(req)
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
const getTrainingTransDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await trainingTransService.getTrainingTransDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getTrainingTransDetailDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await trainingTransDetailService.getTrainingTransDetailDropdown(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataTrainingTransDetail = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await trainingTransDetailService.getInitialDataTrainingTransDetail(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getTrainingTransDetailTableList,
  getTrainingTransDetailTableById,
  createTrainingTransDetailTable,
  editTrainingTransDetailTable,
  deleteTrainingTransDetailTable,
  getEmployeeDropdown,
  getDepartmentDropdown,
  getPositionDropdown,
  getTrainingTransDropdown,
  getTrainingTransDetailDropdown,
  getInitialDataTrainingTransDetail
};
