const legal_punishment_detailService = require("../services/legal_punishment_detail_service");
const legalPunishmentService = require("../services/legal_punishment_service");
const respons = require("../shared/tools/respons_handler");
let createLegalPunishmentDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishment_detailService.createLegalPunishmentDetailTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLegalPunishmentDetailTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishment_detailService.getLegalPunishmentDetailTableList(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editLegalPunishmentDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishment_detailService.editLegalPunishmentDetailTable(req)
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteLegalPunishmentDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishment_detailService.deleteLegalPunishmentDetailTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getLegalPunishmentDetailTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishment_detailService.getLegalPunishmentDetailTableById(
          req
        )
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getLegalPunishmentDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legalPunishmentService.getLegalPunishmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getLegalPunishmentDetailTableList,
  getLegalPunishmentDetailTableById,
  createLegalPunishmentDetailTable,
  editLegalPunishmentDetailTable,
  deleteLegalPunishmentDetailTable,
  getLegalPunishmentDropdown,
};
