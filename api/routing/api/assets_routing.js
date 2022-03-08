const express = require("express");
const router = express.Router();
const controller = require("../../controller/assets_controller");
router.post(
  "/getAssetsTableList",
  controller.getAssetsTableList
);
router.post(
  "/getAssetsTableById",
  controller.getAssetsTableById
);
router.post(
  "/createAssetsTable",
  controller.createAssetsTable
);
router.post("/editAssetsTable", controller.editAssetsTable);
router.post(
  "/deleteAssetsTable",
  controller.deleteAssetsTable
);
router.post(
  "/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post("/getAssetCategoryDropDown", controller.getAssetsCatagoryDropdown);
router.post("/getInitialData", controller.getInitialDataAssets);
// router.post("/GetPurchaseOrderDropdown", controller.getPurchaseOrderDropdown);
module.exports = router;
