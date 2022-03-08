const relativeService = require("../services/relative_service");
const respons = require("../shared/tools/respons_handler");
let createRelativeTable = async (req, res) => {
  try {
    res.status(200).json(await relativeService.createRelativeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRelativeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await relativeService.getRelativeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRelativeTable = async (req, res) => {
  try {
    res.status(200).json(await relativeService.editRelativeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRelativeTable = async (req, res) => {
  try {
    res.status(200).json(await relativeService.deleteRelativeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRelativeTableById = async (req, res) => {
  try {
   res.status(200).json(await relativeService.getRelativeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getRelativeTableList,
  getRelativeTableById,
  createRelativeTable,
  editRelativeTable,
  deleteRelativeTable,
};
