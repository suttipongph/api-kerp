const timeticket_transService = require("../services/timeticket_trans_service");
const respons = require("../shared/tools/respons_handler");
let createTimeticketTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticket_transService.createTimeticketTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTimeticketTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await timeticket_transService.getTimeticketTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTimeticketTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticket_transService.editTimeticketTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTimeticketTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticket_transService.deleteTimeticketTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTimeticketTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticket_transService.getTimeticketTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getTimeticketTransTableList,
  getTimeticketTransTableById,
  createTimeticketTransTable,
  editTimeticketTransTable,
  deleteTimeticketTransTable,
};
