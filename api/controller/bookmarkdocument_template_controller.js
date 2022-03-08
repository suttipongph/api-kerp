const bookmarkdocument_templateService = require("../services/bookmarkdocument_template_service");
const respons = require("../shared/tools/respons_handler");
let createBookmarkdocumentTemplateTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocument_templateService.createBookmarkdocumentTemplateTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBookmarkdocumentTemplateTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocument_templateService.getBookmarkdocumentTemplateTableList(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBookmarkdocumentTemplateTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocument_templateService.editBookmarkdocumentTemplateTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBookmarkdocumentTemplateTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocument_templateService.deleteBookmarkdocumentTemplateTable(
          req
        )
      );
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBookmarkdocumentTemplateTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocument_templateService.getBookmarkdocumentTemplateTableById(
          req
        )
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getBookmarkdocumentTemplateTableList,
  getBookmarkdocumentTemplateTableById,
  createBookmarkdocumentTemplateTable,
  editBookmarkdocumentTemplateTable,
  deleteBookmarkdocumentTemplateTable,
};
