const express = require("express");
const router = express.Router();
const controller = require("../../controller/assessment_trans_type_controller");
router.post(
  "/getAssessmentTransTypeTableList",
  controller.getAssessmentTransTypeTableList
);
router.post(
  "/getAssessmentTransTypeTableById",
  controller.getAssessmentTransTypeTableById
);
router.post(
  "/createAssessmentTransTypeTable",
  controller.createAssessmentTransTypeTable
);
router.post("/editAssessmentTransTypeTable", controller.editAssessmentTransTypeTable);
router.post(
  "/deleteAssessmentTransTypeTable",
  controller.deleteAssessmentTransTypeTable
);
module.exports = router;
