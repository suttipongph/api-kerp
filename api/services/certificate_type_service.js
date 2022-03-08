const model = require("../model/certificate_type_model");
let createCertificateTypeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTypeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCertificateTypeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteCertificateTypeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTypeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTypeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getCertificateTypeTableList,
  getCertificateTypeTableById,
  createCertificateTypeTable,
  editCertificateTypeTable,
  deleteCertificateTypeTable,
  getCertificateTypeDropdown
};
