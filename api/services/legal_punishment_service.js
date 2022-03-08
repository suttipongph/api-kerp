const model = require("../model/legal_punishment_model");
let createLegalPunishmentTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editLegalPunishmentTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteLegalPunishmentTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLegalPunishmentDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getLegalPunishmentTableList,
  getLegalPunishmentTableById,
  createLegalPunishmentTable,
  editLegalPunishmentTable,
  deleteLegalPunishmentTable,
  getLegalPunishmentDropdown,
};
