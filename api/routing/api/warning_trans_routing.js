const express = require("express");
const router = express.Router();
const controller = require("../../controller/warning_trans_controller");
router.post(
  "/getWarningTransTableList",
  controller.getWarningTransTableList
);
router.post(
  "/getWarningTransTableById",
  controller.getWarningTransTableById
);
router.post(
  "/createWarningTransTable",
  controller.createWarningTransTable
);
router.post("/editWarningTransTable", controller.editWarningTransTable);
router.post(
  "/deleteWarningTransTable",
  controller.deleteWarningTransTable
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
module.exports = router;
