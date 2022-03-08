const express = require("express");
const router = express.Router();
const controller = require("../../controller/stockout_controller");
router.post(
  "/getStockoutTableList",
  controller.getStockoutTableList
);
router.post(
  "/getStockoutTableById",
  controller.getStockoutTableById
);
router.post(
  "/createStockoutTable",
  controller.createStockoutTable
);
router.post("/editStockoutTable", controller.editStockoutTable);
router.post(
  "/deleteStockoutTable",
  controller.deleteStockoutTable
);
router.post("/getReceiveDropDown", controller.getEmployeeDropdown);
router.post("/getSenderDropDown", controller.getEmployeeDropdown);
router.post("/getPartDropDown", controller.getPartDropdown);
router.post("/getUnitDropDown", controller.getUnitDropdown);
router.post("/getInventorytransectionDropDown", controller.getInventorytransactionDropdown);
module.exports = router;
