const model = require("../model/document_status_model");
let createDocumentStatusTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDocumentStatusTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editDocumentStatusTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteDocumentStatusTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDocumentStatusTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDocumentStatusDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDocumentStatusDropDownByAdjustPosition = async (req) => {
  try {
    return await model.DropDownByAdjustPosition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getDocumentStatusTableList,
  getDocumentStatusTableById,
  createDocumentStatusTable,
  editDocumentStatusTable,
  deleteDocumentStatusTable,
  getDocumentStatusDropdown,
  getDocumentStatusDropDownByAdjustPosition,
};
