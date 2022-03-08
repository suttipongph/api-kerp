const express = require("express");
const router = express.Router();
const controller = require("../../controller/stockreturn_controller");
router.post(
  "/getStockreturnTableList",
  controller.getStockreturnTableList
);
router.post(
  "/getStockreturnTableById",
  controller.getStockreturnTableById
);
router.post(
  "/createStockreturnTable",
  controller.createStockreturnTable
);
router.post("/editStockreturnTable", controller.editStockreturnTable);
router.post(
  "/deleteStockreturnTable",
  controller.deleteStockreturnTable
);
router.post("/getReceiveDropDown", controller.getEmployeeDropdown);
router.post("/getSenderDropDown", controller.getEmployeeDropdown);
router.post("/getPartDropDown", controller.getPartDropdown);
router.post("/getUnitDropDown", controller.getUnitDropdown);
router.post("/getInventorytransectionDropDown", controller.getInventorytransactionDropdown);
module.exports = router;
