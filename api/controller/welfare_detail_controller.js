const welfare_detailService = require("../services/welfare_detail_service");
const welfareService = require("../services/welfare_service");
const respons = require("../shared/tools/respons_handler");
let createWelfareDetailTable = async (req, res) => {
  try {
    res.status(200).json(await welfare_detailService.createWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWelfareDetailTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detailService.getWelfareDetailTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWelfareDetailTable = async (req, res) => {
  try {
    res.status(200).json(await welfare_detailService.editWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWelfareDetailTable = async (req, res) => {
  try {
    res.status(200).json(await welfare_detailService.deleteWelfareDetailTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWelfareDetailTableById = async (req, res) => {
  try {
   res.status(200).json(await welfare_detailService.getWelfareDetailTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getWelfareDropdown = async (req, res) => {
  try {
    res.status(200).json(await welfareService.getWelfareDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getWelfareDetailTableList,
  getWelfareDetailTableById,
  createWelfareDetailTable,
  editWelfareDetailTable,
  deleteWelfareDetailTable,
  getWelfareDropdown,
};
