const express = require("express");
const router = express.Router();
const controller = require("../../controller/job_trans_controller");
router.post(
  "/getJobTransTableList",
  controller.getJobTransTableList
);
router.post(
  "/getJobTransTableById",
  controller.getJobTransTableById
);
router.post(
  "/getInitialData",
  controller.getInitialDataJobTrans
);
router.post(
  "/createJobTransTable",
  controller.createJobTransTable
);
router.post("/editJobTransTable", controller.editJobTransTable);
router.post(
  "/deleteJobTransTable",
  controller.deleteJobTransTable
);
router.post("/getJobDropDown", controller.getJobDropdown);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
module.exports = router;
