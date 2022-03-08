const nationalityService = require("../services/nationality_service");
const respons = require("../shared/tools/respons_handler");
let createNationalityTable = async (req, res) => {
  try {
    res.status(200).json(await nationalityService.createNationalityTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getNationalityTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await nationalityService.getNationalityTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editNationalityTable = async (req, res) => {
  try {
    res.status(200).json(await nationalityService.editNationalityTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteNationalityTable = async (req, res) => {
  try {
    res.status(200).json(await nationalityService.deleteNationalityTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getNationalityTableById = async (req, res) => {
  try {
   res.status(200).json(await nationalityService.getNationalityTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getNationalityTableList,
  getNationalityTableById,
  createNationalityTable,
  editNationalityTable,
  deleteNationalityTable,
};
