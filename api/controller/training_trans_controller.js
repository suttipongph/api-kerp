const training_transService = require("../services/training_trans_service");
const trainingTransDetailService = require("../services/training_trans_detail_service");
const employeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.createTrainingTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTrainingTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.getTrainingTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.editTrainingTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.deleteTrainingTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTrainingTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.getTrainingTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
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
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getTrainingTransTableList,
  getTrainingTransTableById,
  createTrainingTransTable,
  editTrainingTransTable,
  deleteTrainingTransTable,
  getTrainingTransDetailDropdown,
  getEmployeeDropdown,
};
