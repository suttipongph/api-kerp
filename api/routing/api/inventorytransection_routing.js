const express = require("express");
const router = express.Router();
const controller = require("../../controller/inventorytransection_controller");
router.post(
  "/getInventorytransectionTableList",
  controller.getInventorytransectionTableList
);
router.post(
  "/getInventorytransectionTableById",
  controller.getInventorytransectionTableById
);
router.post(
  "/createInventorytransectionTable",
  controller.createInventorytransectionTable
);
router.post("/editInventorytransectionTable", controller.editInventorytransectionTable);
router.post(
  "/deleteInventorytransectionTable",
  controller.deleteInventorytransectionTable
);
router.post("/getPartDropDown", controller.getPartDropdown);
// router.post("/GetMoveTypeDropdown", controller.getMoveTypeDropdown);
module.exports = router;
