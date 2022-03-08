const express = require("express");
const router = express.Router();
const controller = require("../../controller/stockin_controller");
router.post(
  "/getStockinTableList",
  controller.getStockinTableList
);
router.post(
  "/getStockinTableById",
  controller.getStockinTableById
);
router.post(
  "/createStockinTable",
  controller.createStockinTable
);
router.post("/editStockinTable", controller.editStockinTable);
router.post(
  "/deleteStockinTable",
  controller.deleteStockinTable
);
router.post("/getReceiveDropDown", controller.getEmployeeDropdown);
router.post("/getInspectDropDown", controller.getEmployeeDropdown);
router.post("/getPartDropDown", controller.getPartDropdown);
router.post("/getUnitDropDown", controller.getUnitDropdown);
router.post("/getInventorytransectionDropDown", controller.getInventorytransactionDropdown);
module.exports = router;
