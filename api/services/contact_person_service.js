const model = require("../model/contact_person_model");
let createContactPersonTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactPersonTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editContactPersonTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteContactPersonTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactPersonTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getContactPersonDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataContactPerson = async (req) => {
  try {
    var contact_person = await model.getContactPersonCode(req);
    if (contact_person) {
      var lastContactPersonCode = contact_person.contact_person_code;
      let newlastContactPersonCode = 1;
      let codeForMat = "";
      if (lastContactPersonCode) {
        newlastContactPersonCode = parseInt(lastContactPersonCode) + 1;
      }
      if (newlastContactPersonCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastContactPersonCode;
        if (newlastContactPersonCode < 100) {
          codeForMat = "0" + "0" + newlastContactPersonCode;
          if (newlastContactPersonCode < 10) {
            codeForMat = "0" + newlastContactPersonCode;
          }
        }
      }
      return {
        contact_person_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        contact_person_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getContactPersonTableList,
  getContactPersonTableById,
  createContactPersonTable,
  editContactPersonTable,
  deleteContactPersonTable,
  getContactPersonDropdown,
  getInitialDataContactPerson,
};
