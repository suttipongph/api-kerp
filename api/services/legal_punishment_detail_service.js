const model = require("../model/legal_punishment_detail_model");
let createLegalPunishmentDetailTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentDetailTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editLegalPunishmentDetailTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteLegalPunishmentDetailTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentDetailTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentDetailDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getLegalPunishmentDetailTableList,
  getLegalPunishmentDetailTableById,
  createLegalPunishmentDetailTable,
  editLegalPunishmentDetailTable,
  deleteLegalPunishmentDetailTable,
  getLegalPunishmentDetailDropdown,
};
