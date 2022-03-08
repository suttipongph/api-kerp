const express = require("express");
const router = express.Router();
const controller = require("../../controller/stockcut_controller");
router.post(
  "/getStockcutTableList",
  controller.getStockcutTableList
);
router.post(
  "/getStockcutTableById",
  controller.getStockcutTableById
);
router.post(
  "/createStockcutTable",
  controller.createStockcutTable
);
router.post("/editStockcutTable", controller.editStockcutTable);
router.post(
  "/deleteStockcutTable",
  controller.deleteStockcutTable
);
router.post("/getReceiveDropDown", controller.getEmployeeDropdown);
router.post("/getInspectDropDown", controller.getEmployeeDropdown);
router.post("/getPartDropDown", controller.getPartDropdown);
router.post("/getUnitDropDown", controller.getUnitDropdown);
router.post("/getInventorytransectionDropDown", controller.getInventorytransactionDropdown);
router.post("/getPartList", controller.getPartList)
module.exports = router;
