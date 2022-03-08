const express = require("express");
const router = express.Router();
const controller = require("../../controller/supplier_category_controller");
router.post(
  "/getSupplierCategoryTableList",
  controller.getSupplierCategoryTableList
);
router.post(
  "/getSupplierCategoryTableById",
  controller.getSupplierCategoryTableById
);
router.post(
  "/createSupplierCategoryTable",
  controller.createSupplierCategoryTable
);
router.post("/editSupplierCategoryTable", controller.editSupplierCategoryTable);
router.post(
  "/deleteSupplierCategoryTable",
  controller.deleteSupplierCategoryTable
);
module.exports = router;
