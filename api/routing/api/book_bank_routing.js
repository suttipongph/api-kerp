const express = require("express");
const router = express.Router();
const controller = require("../../controller/book_bank_controller");
router.post(
  "/getBookBankTableList",
  controller.getBookBankTableList
);
router.post(
  "/getBookBankTableById",
  controller.getBookBankTableById
);
router.post(
  "/createBookBankTable",
  controller.createBookBankTable
);
router.post("/editBookBankTable", controller.editBookBankTable);
router.post(
  "/deleteBookBankTable",
  controller.deleteBookBankTable
);
router.post(
  "/getBankDropDown",
  controller.getBankDropDown
);
module.exports = router;
