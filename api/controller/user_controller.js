const userService = require("../services/user_service");
const employeeService = require("../services/employee_service");
const roleService = require("../services/role_service");
const subscribeService = require("../services/subscribe_service");
const respons = require("../shared/tools/respons_handler");
let createUserTable = async (req, res) => {
  try {
    res.status(200).json(await userService.createUserTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getUserTableList = async (req, res) => {
  try {
    res.status(200).json(await userService.getUserTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editUserTable = async (req, res) => {
  try {
    res.status(200).json(await userService.editUserTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteUserTable = async (req, res) => {
  try {
    res.status(200).json(await userService.deleteUserTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getUserTableById = async (req, res) => {
  try {
    res.status(200).json(await userService.getUserTableById(req));
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
const getRoleDropdown = async (req, res) => {
  try {
    res.status(200).json(await roleService.getRoleDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSubscribeDropdown = async (req, res) => {
  try {
    res.status(200).json(await subscribeService.getSubscribeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getUserTableList,
  getUserTableById,
  createUserTable,
  editUserTable,
  deleteUserTable,
  getEmployeeDropdown,
  getRoleDropdown,
  getSubscribeDropdown,
};
