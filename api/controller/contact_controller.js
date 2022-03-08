const contactService = require("../services/contact_service");
const respons = require("../shared/tools/respons_handler");
const emergencycontactService = require("../services/emergency_contact_service");
const employeeService = require("../services/employee_service");
let createContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.createContactTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getContactTableList = async (req, res) => {
  try {
    res.status(200).json(await contactService.getContactTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.editContactTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.deleteContactTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getContactTableById = async (req, res) => {
  try {
    res.status(200).json(await contactService.getContactTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

//#region EmergencyContact
let getEmergencyContactDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencycontactService.getEmergencyContactDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmergencyContactTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await emergencycontactService.getEmergencyContactTableList(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let createEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencycontactService.createEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEmergencyContactTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencycontactService.getEmergencyContactTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencycontactService.editEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencycontactService.deleteEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
//#endregion
module.exports = {
  getContactTableList,
  getContactTableById,
  createContactTable,
  editContactTable,
  deleteContactTable,
  getEmergencyContactDropDown,
  getEmergencyContactTableList,
  getEmployeeDropDown,
  createEmergencyContactTable,
  getEmergencyContactTableById,
  editEmergencyContactTable,
  deleteEmergencyContactTable,
};
