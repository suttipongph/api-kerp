const roleService = require("../services/role_service");
const respons = require("../shared/tools/respons_handler");
let createRoleTable = async (req, res) => {
  try {
    res.status(200).json(await roleService.createRoleTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRoleTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await roleService.getRoleTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRoleTable = async (req, res) => {
  try {
    res.status(200).json(await roleService.editRoleTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRoleTable = async (req, res) => {
  try {
    res.status(200).json(await roleService.deleteRoleTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRoleTableById = async (req, res) => {
  try {
   res.status(200).json(await roleService.getRoleTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getRoleTableList,
  getRoleTableById,
  createRoleTable,
  editRoleTable,
  deleteRoleTable,
};
