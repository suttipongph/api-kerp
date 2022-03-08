const express = require("express");
const router = express.Router();
const controller = require("../../controller/job_controller");
router.post(
  "/getJobTableList",
  controller.getJobTableList
);
router.post(
  "/getJobTableById",
  controller.getJobTableById
);
router.post(
  "/createJobTable",
  controller.createJobTable
);
router.post("/editJobTable", controller.editJobTable);
router.post(
  "/deleteJobTable",
  controller.deleteJobTable
);
// router.post("/GetConfirmOrderDropdown", controller.getConfirmOrderDropdown);
// router.post("/GetMakerDropdown", controller.getMakerDropdown);
// router.post("/GetProductionDropdown", controller.getProductionDropdown);
module.exports = router;
