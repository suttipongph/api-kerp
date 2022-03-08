const express = require("express");
const router = express.Router();
const controller = require("../../controller/worktime_trans_controller");
router.post(
  "/getWorktimeTransTableList",
  controller.getWorktimeTransTableById
);
router.post(
  "/getWorktimeTransTableById",
  controller.getWorktimeTransTableById
);
router.post(
  "/createWorktimeTransTable",
  controller.createWorktimeTransTable
);
router.post("/editWorktimeTransTable", controller.editWorktimeTransTable);
router.post(
  "/deleteWorktimeTransTable",
  controller.deleteWorktimeTransTable
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post(
  "/Action/Copy-Work-time-trans/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/Copy-Work-time-trans/getCopyWorkTimeTransByEmployeeOriginal",
   controller.getCopyWorkTimeTransByEmployeeOriginal
);
router.post(
  "/Action/Copy-Work-time-trans/createWorktimeTransTableByEmployeeUUID",
   controller.createWorktimeTransTableByEmployeeUUID
);
module.exports = router;
