const express = require("express");
const router = express.Router();
const controller = require("../../controller/feature_controller");
router.post(
  "/getFeatureTableList",
  controller.getFeatureTableList
);
router.post(
  "/getFeatureTableById",
  controller.getFeatureTableById
);
router.post(
  "/createFeatureTable",
  controller.createFeatureTable
);
router.post("/editFeatureTable", controller.editFeatureTable);
router.post(
  "/deleteFeatureTable",
  controller.deleteFeatureTable
);
module.exports = router;
