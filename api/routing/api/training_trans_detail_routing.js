const express = require("express");
const router = express.Router();
const controller = require("../../controller/training_trans_detail_controller");
router.post(
  "/getTrainingTransDetailTableList",
  controller.getTrainingTransDetailTableList
);
router.post(
  "/getTrainingTransDetailTableById",
  controller.getTrainingTransDetailTableById
);
router.post(
  "/createTrainingTransDetailTable",
  controller.createTrainingTransDetailTable
);
router.post(
  "/editTrainingTransDetailTable",
  controller.editTrainingTransDetailTable
);
router.post(
  "/deleteTrainingTransDetailTable",
  controller.deleteTrainingTransDetailTable
);
router.post(
  "/getInitialData",
  controller.getInitialDataTrainingTransDetail
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/getPositionDropdown", controller.getPositionDropdown);
router.post("/getTrainingTransDropdown", controller.getTrainingTransDropdown);
router.post(
  "/getTrainingTransDetailDropDown",
  controller.getTrainingTransDetailDropdown
);
module.exports = router;
