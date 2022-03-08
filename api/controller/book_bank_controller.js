const book_bankService = require("../services/book_bank_service");
const BankService = require("../services/bank_service");
const respons = require("../shared/tools/respons_handler");
let createBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await book_bankService.createBookBankTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBookBankTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await book_bankService.getBookBankTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await book_bankService.editBookBankTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await book_bankService.deleteBookBankTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBookBankTableById = async (req, res) => {
  try {
   res.status(200).json(await book_bankService.getBookBankTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getBankDropDown = async (req, res) => {
  try {
   res.status(200).json(await BankService.getBankDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getBookBankTableList,
  getBookBankTableById,
  createBookBankTable,
  editBookBankTable,
  deleteBookBankTable,
  getBankDropDown
};
