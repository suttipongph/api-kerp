const express = require("express");
const router = express.Router();
const controller = require("../../controller/assessment_trans_controller");
router.post(
  "/getAssessmentTransTableList",
  controller.getAssessmentTransTableList
);
router.post(
  "/getAssessmentTransTableById",
  controller.getAssessmentTransTableById
);
router.post(
  "/createAssessmentTransTable",
  controller.createAssessmentTransTable
);
router.post("/editAssessmentTransTable", controller.editAssessmentTransTable);
router.post(
  "/deleteAssessmentTransTable",
  controller.deleteAssessmentTransTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post(
  "/getAssessmentTransTypeDropDown",
  controller.getAssessmentTransTypeDropDown
);
router.post(
  "/getAssessmentTransCode",
  controller.getAssessmentTransCode
);
module.exports = router;
