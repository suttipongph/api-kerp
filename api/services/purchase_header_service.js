const model = require("../model/purchase_header_model");
let createPurchaseHeaderTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPurchaseHeaderTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editPurchaseHeaderTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deletePurchaseHeaderTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPurchaseHeaderTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPurchaseHeaderDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};


module.exports = {
  getPurchaseHeaderTableList,
  getPurchaseHeaderTableById,
  createPurchaseHeaderTable,
  editPurchaseHeaderTable,
  deletePurchaseHeaderTable,
  getPurchaseHeaderDropdown
};
