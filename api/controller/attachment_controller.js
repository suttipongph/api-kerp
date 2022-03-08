const attachmentService = require("../services/attachment_service");
const respons = require("../shared/tools/respons_handler");
let createAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.createAttachmentTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAttachmentTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await attachmentService.getAttachmentTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.editAttachmentTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.deleteAttachmentTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAttachmentTableById = async (req, res) => {
  try {
   res.status(200).json(await attachmentService.getAttachmentTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getAttachmentTableList,
  getAttachmentTableById,
  createAttachmentTable,
  editAttachmentTable,
  deleteAttachmentTable,
};
