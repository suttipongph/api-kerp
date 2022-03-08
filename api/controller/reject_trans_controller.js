const reject_transService = require("../services/reject_trans_service");
const respons = require("../shared/tools/respons_handler");
let createRejectTransTable = async (req, res) => {
  try {
    res.status(200).json(await reject_transService.createRejectTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRejectTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await reject_transService.getRejectTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRejectTransTable = async (req, res) => {
  try {
    res.status(200).json(await reject_transService.editRejectTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRejectTransTable = async (req, res) => {
  try {
    res.status(200).json(await reject_transService.deleteRejectTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRejectTransTableById = async (req, res) => {
  try {
   res.status(200).json(await reject_transService.getRejectTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getRejectTransTableList,
  getRejectTransTableById,
  createRejectTransTable,
  editRejectTransTable,
  deleteRejectTransTable,
};
