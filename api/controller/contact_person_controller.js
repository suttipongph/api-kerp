const contact_personService = require("../services/contact_person_service");
const statusService = require("../services/status_service");
const suplierService = require("../services/suplier_service");
const customerService = require("../services/customer_service");
const contact_typeService = require("../services/contact_type_service");
const respons = require("../shared/tools/respons_handler");
let createContactPersonTable = async (req, res) => {
  try {
    res.status(200).json(await contact_personService.createContactPersonTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getContactPersonTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await contact_personService.getContactPersonTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editContactPersonTable = async (req, res) => {
  try {
    res.status(200).json(await contact_personService.editContactPersonTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteContactPersonTable = async (req, res) => {
  try {
    res.status(200).json(await contact_personService.deleteContactPersonTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getContactPersonTableById = async (req, res) => {
  try {
   res.status(200).json(await contact_personService.getContactPersonTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getStatusDropdown = async (req, res) => {
  try {
    res.status(200).json(await statusService.getStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSuplierDropdown = async (req, res) => {
  try {
    res.status(200).json(await suplierService.getSuplierDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getCustomerDropdown = async (req, res) => {
  try {
    res.status(200).json(await customerService.getCustomerDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getContactTypeDropDown = async (req, res) => {
  try {
    res.status(200).json(await contact_typeService.getContactTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataContactPerson = async (req, res) => {
  try {
    res.status(200).json(await contact_personService.getInitialDataContactPerson(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getContactPersonTableList,
  getContactPersonTableById,
  createContactPersonTable,
  editContactPersonTable,
  deleteContactPersonTable,
  getStatusDropdown,
  getSuplierDropdown,
  getCustomerDropdown,
  getContactTypeDropDown,
  getInitialDataContactPerson,
};
