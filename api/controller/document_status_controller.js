const document_statusService = require("../services/document_status_service");
const respons = require("../shared/tools/respons_handler");
let createDocumentStatusTable = async (req, res) => {
  try {
    res.status(200).json(await document_statusService.createDocumentStatusTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getDocumentStatusTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await document_statusService.getDocumentStatusTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editDocumentStatusTable = async (req, res) => {
  try {
    res.status(200).json(await document_statusService.editDocumentStatusTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteDocumentStatusTable = async (req, res) => {
  try {
    res.status(200).json(await document_statusService.deleteDocumentStatusTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getDocumentStatusTableById = async (req, res) => {
  try {
   res.status(200).json(await document_statusService.getDocumentStatusTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getDocumentStatusTableList,
  getDocumentStatusTableById,
  createDocumentStatusTable,
  editDocumentStatusTable,
  deleteDocumentStatusTable,
};
