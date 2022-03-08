const leave_trans_typeService = require("../services/leave_trans_type_service");
const respons = require("../shared/tools/respons_handler");
let createLeaveTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await leave_trans_typeService.createLeaveTransTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLeaveTransTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_trans_typeService.getLeaveTransTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editLeaveTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await leave_trans_typeService.editLeaveTransTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteLeaveTransTypeTable = async (req, res) => {
  try {
    res.status(200).json(await leave_trans_typeService.deleteLeaveTransTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getLeaveTransTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await leave_trans_typeService.getLeaveTransTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getLeaveTransTypeCode = async (req, res) => {
  try {
    res.status(200).json(await leave_trans_typeService.getLeaveTransTypeCode(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getLeaveTransTypeTableList,
  getLeaveTransTypeTableById,
  createLeaveTransTypeTable,
  editLeaveTransTypeTable,
  deleteLeaveTransTypeTable,
  getLeaveTransTypeCode,
};
