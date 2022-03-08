const express = require("express");
const router = express.Router();
const controller = require("../../controller/supplier_branch_controller");
router.post(
  "/getSupplierBranchTableList",
  controller.getSupplierBranchTableList
);
router.post(
  "/getSupplierBranchTableById",
  controller.getSupplierBranchTableById
);
router.post(
  "/createSupplierBranchTable",
  controller.createSupplierBranchTable
);
router.post("/editSupplierBranchTable", controller.editSupplierBranchTable);
router.post(
  "/deleteSupplierBranchTable",
  controller.deleteSupplierBranchTable
);
module.exports = router;
