const welfareService = require("../services/welfare_service");
const welfareDetailService = require("../services/welfare_detail_service");
const respons = require("../shared/tools/respons_handler");
let createWelfareTable = async (req, res) => {
  try {
    res.status(200).json(await welfareService.createWelfareTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWelfareTableList = async (req, res) => {
  try {
    res.status(200).json(await welfareService.getWelfareTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWelfareTable = async (req, res) => {
  try {
    res.status(200).json(await welfareService.editWelfareTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWelfareTable = async (req, res) => {
  try {
    res.status(200).json(await welfareService.deleteWelfareTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWelfareTableById = async (req, res) => {
  try {
    res.status(200).json(await welfareService.getWelfareTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getWelfareDropdown = async (req, res) => {
  try {
    res.status(200).json(await welfareService.getWelfareDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#region  welfaredetail
let getWelfareDetailTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfareDetailService.getWelfareDetailTableList(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getWelfareDetailTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfareDetailService.getWelfareDetailTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let createWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfareDetailService.createWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfareDetailService.editWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let deleteWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfareDetailService.deleteWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#endregion
module.exports = {
  getWelfareTableList,
  getWelfareTableById,
  createWelfareTable,
  editWelfareTable,
  deleteWelfareTable,
  //#region welfare detail
  getWelfareDetailTableList,
  getWelfareDetailTableById,
  createWelfareDetailTable,
  editWelfareDetailTable,
  deleteWelfareDetailTable,
  getWelfareDropdown,

  //#endregion
};
