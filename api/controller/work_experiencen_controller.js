const work_experiencenService = require("../services/work_experiencen_service");
const employeeService = require("../services/employee_service");
const respons = require("../shared/tools/respons_handler");
let createWorkExperiencenTable = async (req, res) => {
  try {
    res.status(200).json(await work_experiencenService.createWorkExperiencenTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWorkExperiencenTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await work_experiencenService.getWorkExperiencenTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWorkExperiencenTable = async (req, res) => {
  try {
    res.status(200).json(await work_experiencenService.editWorkExperiencenTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWorkExperiencenTable = async (req, res) => {
  try {
    res.status(200).json(await work_experiencenService.deleteWorkExperiencenTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWorkExperiencenTableById = async (req, res) => {
  try {
   res.status(200).json(await work_experiencenService.getWorkExperiencenTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getWorkExperiencenTableList,
  getWorkExperiencenTableById,
  createWorkExperiencenTable,
  editWorkExperiencenTable,
  deleteWorkExperiencenTable,
  getEmployeeDropdown,
};
