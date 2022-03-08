const legal_punishmentService = require("../services/legal_punishment_service");
const respons = require("../shared/tools/respons_handler");
const legalpunishmentDetailService = require("../services/legal_punishment_detail_service");
const legalpunishmentService = require("../services/legal_punishment_service");
let createLegalPunishmentTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legal_punishmentService.createLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLegalPunishmentTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legal_punishmentService.getLegalPunishmentTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editLegalPunishmentTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legal_punishmentService.editLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteLegalPunishmentTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legal_punishmentService.deleteLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getLegalPunishmentTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legal_punishmentService.getLegalPunishmentTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#region LegalPunishmentDetail
let createLegalPunishmentDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legalpunishmentDetailService.createLegalPunishmentDetailTable(req)
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
        await legalpunishmentDetailService.getLegalPunishmentDetailTableList(
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
        await legalpunishmentDetailService.editLegalPunishmentDetailTable(req)
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
        await legalpunishmentDetailService.deleteLegalPunishmentDetailTable(req)
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
        await legalpunishmentDetailService.getLegalPunishmentDetailTableById(
          req
        )
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getLegalPunishmentDetailDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await legalpunishmentDetailService.getLegalPunishmentDetailDropdown(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getLegalPunishmentDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legalpunishmentService.getLegalPunishmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion LegalPunishmentDetail

module.exports = {
  getLegalPunishmentTableList,
  getLegalPunishmentTableById,
  createLegalPunishmentTable,
  editLegalPunishmentTable,
  deleteLegalPunishmentTable,
  //#region LegalPunishmentDetail
  createLegalPunishmentDetailTable,
  getLegalPunishmentDetailTableList,
  editLegalPunishmentDetailTable,
  deleteLegalPunishmentDetailTable,
  getLegalPunishmentDetailTableById,
  getLegalPunishmentDetailDropdown,
  getLegalPunishmentDropDown,
  //#endregion
};
