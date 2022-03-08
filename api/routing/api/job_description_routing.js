const express = require("express");
const router = express.Router();
const controller = require("../../controller/job_description_controller");
router.post(
  "/getJobDescriptionTableList",
  controller.getJobDescriptionTableList
);
router.post(
  "/getJobDescriptionTableById",
  controller.getJobDescriptionTableById
);
router.post("/createJobDescriptionTable", controller.createJobDescriptionTable);
router.post("/editJobDescriptionTable", controller.editJobDescriptionTable);
router.post("/deleteJobDescriptionTable", controller.deleteJobDescriptionTable);
module.exports = router;
