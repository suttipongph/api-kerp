const model = require("../model/punishment_type_model");
let createPunishmentTypeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTypeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editPunishmentTypeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deletePunishmentTypeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTypeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTypeByCode = async (req) => {
  try {
    const PT = await model.view(req);
    return {
      is_deduct_salary: PT.is_deduct_salary,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPunishmentTypeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getPunishmentTypeTableList,
  getPunishmentTypeTableById,
  createPunishmentTypeTable,
  editPunishmentTypeTable,
  deletePunishmentTypeTable,
  getPunishmentTypeDropdown,

  getPunishmentTypeByCode,
};
