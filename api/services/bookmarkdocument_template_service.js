const model = require("../model/bookmarkdocument_template_model");
const employeeModel = require("../model/employee_model");
const bookmarkService = require("../shared/document/document_service");
let createBookmarkdocumentTemplateTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookmarkdocumentTemplateTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editBookmarkdocumentTemplateTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteBookmarkdocumentTemplateTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookmarkdocumentTemplateTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getBookmarkdocumentTemplateDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let printDocumentTemplate = async (req, res) => {
  try {
    // const bookmarkType = req.body.book_mark_type;
    let documentTemplate = await model.getBookmarkById(req);
    // switch(req.body.ref_type){

    // }
    let dataModel = await employeeModel.getEmployeeModelBookmark(req);
    bookmarkService.createDocument(
      req,
      res,
      documentTemplate.template_file,
      dataModel
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getBookmarkdocumentTemplateTableList,
  getBookmarkdocumentTemplateTableById,
  createBookmarkdocumentTemplateTable,
  editBookmarkdocumentTemplateTable,
  deleteBookmarkdocumentTemplateTable,
  getBookmarkdocumentTemplateDropdown,
  printDocumentTemplate,
};
