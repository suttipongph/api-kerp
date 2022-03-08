const countryService = require("../services/country_service");
const respons = require("../shared/tools/respons_handler");
let createCountryTable = async (req, res) => {
  try {
    res.status(200).json(await countryService.createCountryTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCountryTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await countryService.getCountryTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCountryTable = async (req, res) => {
  try {
    res.status(200).json(await countryService.editCountryTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCountryTable = async (req, res) => {
  try {
    res.status(200).json(await countryService.deleteCountryTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCountryTableById = async (req, res) => {
  try {
   res.status(200).json(await countryService.getCountryTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCountryTableList,
  getCountryTableById,
  createCountryTable,
  editCountryTable,
  deleteCountryTable,
};
