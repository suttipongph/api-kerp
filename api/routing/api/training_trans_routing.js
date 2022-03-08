const express = require("express");
const router = express.Router();
const controller = require("../../controller/training_trans_controller");
router.post("/getTrainingTransTableList", controller.getTrainingTransTableList);
router.post("/getTrainingTransTableById", controller.getTrainingTransTableById);
router.post("/createTrainingTransTable", controller.createTrainingTransTable);
router.post("/editTrainingTransTable", controller.editTrainingTransTable);
router.post("/deleteTrainingTransTable", controller.deleteTrainingTransTable);
router.post(
  "/getTrainingTransDetailDropDown",
  controller.getTrainingTransDetailDropdown
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
module.exports = router;
