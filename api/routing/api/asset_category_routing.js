const express = require("express");
const router = express.Router();
const controller = require("../../controller/asset_category_controller");
router.post(
  "/getAssetCategoryTableList",
  controller.getAssetCategoryTableList
);
router.post(
  "/getAssetCategoryTableById",
  controller.getAssetCategoryTableById
);
router.post(
  "/createAssetCategoryTable",
  controller.createAssetCategoryTable
);
router.post("/editAssetCategoryTable", controller.editAssetCategoryTable);
router.post(
  "/deleteAssetCategoryTable",
  controller.deleteAssetCategoryTable
);
router.post(
  "/getInitialData",
  controller.getInitialDataAssetCategory
);
module.exports = router;
