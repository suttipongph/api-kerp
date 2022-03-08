const express = require("express");
const router = express.Router();
const controller = require("../../controller/purchase_line_controller");
router.post(
  "/getPurchaseLineTableList",
  controller.getPurchaseLineTableList
);
router.post(
  "/getPurchaseLineTableById",
  controller.getPurchaseLineTableById
);
router.post(
  "/createPurchaseLineTable",
  controller.createPurchaseLineTable
);
router.post("/editPurchaseLineTable", controller.editPurchaseLineTable);
router.post(
  "/deletePurchaseLineTable",
  controller.deletePurchaseLineTable
);
router.post("/GetWarehouseDropdown", controller.getWarehouseDropdown);
module.exports = router;
