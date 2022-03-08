const express = require("express");
const router = express.Router();
const controller = require("../../controller/bank_controller");
router.post(
  "/getBankTableList",
  controller.getBankTableList
);
router.post(
  "/getBankTableById",
  controller.getBankTableById
);
router.post(
  "/createBankTable",
  controller.createBankTable
);
router.post("/editBankTable", controller.editBankTable);
router.post(
  "/deleteBankTable",
  controller.deleteBankTable
);
module.exports = router;
