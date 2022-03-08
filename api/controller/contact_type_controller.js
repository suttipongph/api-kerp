const contact_typeService = require("../services/contact_type_service");
const respons = require("../shared/tools/respons_handler");
let createContactTypeTable = async (req, res) => {
  try {
    res.status(200).json(await contact_typeService.createContactTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getContactTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await contact_typeService.getContactTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editContactTypeTable = async (req, res) => {
  try {
    res.status(200).json(await contact_typeService.editContactTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteContactTypeTable = async (req, res) => {
  try {
    res.status(200).json(await contact_typeService.deleteContactTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getContactTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await contact_typeService.getContactTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getContactTypeTableList,
  getContactTypeTableById,
  createContactTypeTable,
  editContactTypeTable,
  deleteContactTypeTable,
};
