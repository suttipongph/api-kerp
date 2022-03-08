const express = require("express");
const router = express.Router();
const controller = require("../../controller/purchase_header_controller");
router.post(
  "/getPurchaseHeaderTableList",
  controller.getPurchaseHeaderTableList
);
router.post(
  "/getPurchaseHeaderTableById",
  controller.getPurchaseHeaderTableById
);
router.post(
  "/createPurchaseHeaderTable",
  controller.createPurchaseHeaderTable
);
router.post("/editPurchaseHeaderTable", controller.editPurchaseHeaderTable);
router.post(
  "/deletePurchaseHeaderTable",
  controller.deletePurchaseHeaderTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDocumentStatusDropdown", controller.getDocumentStatusDropdown);
router.post("/GetWarehouseDropdown", controller.getWarehouseDropdown);

router.post(
  "/getSupplierDropDown",
  controller.getSupplierDropDown
);

router.post("/createPurchaseLineTable", controller.createPurchaseLineTable)
router.post("/getPurchaseLineTableList", controller.getPurchaseLineTable)
module.exports = router;
