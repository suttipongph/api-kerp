const punishment_typeService = require("../services/punishment_type_service");
const respons = require("../shared/tools/respons_handler");
let createPunishmentTypeTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_typeService.createPunishmentTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPunishmentTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_typeService.getPunishmentTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPunishmentTypeTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_typeService.editPunishmentTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePunishmentTypeTable = async (req, res) => {
  try {
    res.status(200).json(await punishment_typeService.deletePunishmentTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPunishmentTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await punishment_typeService.getPunishmentTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getPunishmentTypeTableList,
  getPunishmentTypeTableById,
  createPunishmentTypeTable,
  editPunishmentTypeTable,
  deletePunishmentTypeTable,
};
