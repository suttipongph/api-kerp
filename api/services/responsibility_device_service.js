const model = require("../model/responsibility_device_model");
let createResponsibilityDeviceTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResponsibilityDeviceTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editResponsibilityDeviceTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteResponsibilityDeviceTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResponsibilityDeviceTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResponsibilityDeviceDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataResponsibilityDevice = async (req) => {
  try {
    var responsibility_device = await model.getResponsibilityDeviceCode(req);
    if (responsibility_device) {
      var lastResponsibilityDeviceCode =
        responsibility_device.responsibility_device_code;
      let newlastResponsibilityDeviceCode = 1;
      let codeForMat = "";
      if (lastResponsibilityDeviceCode) {
        newlastResponsibilityDeviceCode =
          parseInt(lastResponsibilityDeviceCode) + 1;
      }
      if (newlastResponsibilityDeviceCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastResponsibilityDeviceCode;
        if (newlastResponsibilityDeviceCode < 100) {
          codeForMat = "0" + "0" + newlastResponsibilityDeviceCode;
          if (newlastResponsibilityDeviceCode < 10) {
            codeForMat = "0" + newlastResponsibilityDeviceCode;
          }
        }
      }
      return {
        responsibility_device_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        responsibility_device_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getResponsibilityDeviceTableList,
  getResponsibilityDeviceTableById,
  createResponsibilityDeviceTable,
  editResponsibilityDeviceTable,
  deleteResponsibilityDeviceTable,
  getResponsibilityDeviceDropdown,
  getInitialDataResponsibilityDevice,
};
