const model = require("../model/punishment_trans_model");
let createPunishmentTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editPunishmentTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deletePunishmentTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getPunishmentTransTableList,
  getPunishmentTransTableById,
  createPunishmentTransTable,
  editPunishmentTransTable,
  deletePunishmentTransTable,
  getPunishmentTransDropdown
};
