const bankService = require("../services/bank_service");
const respons = require("../shared/tools/respons_handler");
let createBankTable = async (req, res) => {
  try {
    res.status(200).json(await bankService.createBankTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBankTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await bankService.getBankTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBankTable = async (req, res) => {
  try {
    res.status(200).json(await bankService.editBankTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBankTable = async (req, res) => {
  try {
    res.status(200).json(await bankService.deleteBankTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBankTableById = async (req, res) => {
  try {
   res.status(200).json(await bankService.getBankTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getBankTableList,
  getBankTableById,
  createBankTable,
  editBankTable,
  deleteBankTable,
};
