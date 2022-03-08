const certificate_typeService = require("../services/certificate_type_service");
const respons = require("../shared/tools/respons_handler");
let createCertificateTypeTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_typeService.createCertificateTypeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCertificateTypeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_typeService.getCertificateTypeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCertificateTypeTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_typeService.editCertificateTypeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCertificateTypeTable = async (req, res) => {
  try {
    res.status(200).json(await certificate_typeService.deleteCertificateTypeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCertificateTypeTableById = async (req, res) => {
  try {
   res.status(200).json(await certificate_typeService.getCertificateTypeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getCertificateTypeTableList,
  getCertificateTypeTableById,
  createCertificateTypeTable,
  editCertificateTypeTable,
  deleteCertificateTypeTable,
};
