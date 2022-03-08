const register_stationService = require("../services/register_station_service");
const respons = require("../shared/tools/respons_handler");
let createRegisterStationTable = async (req, res) => {
  try {
    res.status(200).json(await register_stationService.createRegisterStationTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRegisterStationTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await register_stationService.getRegisterStationTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRegisterStationTable = async (req, res) => {
  try {
    res.status(200).json(await register_stationService.editRegisterStationTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRegisterStationTable = async (req, res) => {
  try {
    res.status(200).json(await register_stationService.deleteRegisterStationTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRegisterStationTableById = async (req, res) => {
  try {
   res.status(200).json(await register_stationService.getRegisterStationTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getRegisterStationTableList,
  getRegisterStationTableById,
  createRegisterStationTable,
  editRegisterStationTable,
  deleteRegisterStationTable,
};
