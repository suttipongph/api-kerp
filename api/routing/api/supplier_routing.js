const express = require("express");
const router = express.Router();
const controller = require("../../controller/supplier_controller");
router.post(
  "/getSupplierTableList",
  controller.getSupplierTableList
);
router.post(
  "/getSupplierTableById",
  controller.getSupplierTableById
);
router.post(
  "/createSupplierTable",
  controller.createSupplierTable
);
router.post("/editSupplierTable", controller.editSupplierTable);
router.post(
  "/deleteSupplierTable",
  controller.deleteSupplierTable
);
router.post("/getContactPersonDropDown", controller.getContactPersonDropdown);
router.post("/getAddressDropdown", controller.getAddressDropdown);
router.post("/getSupplierCategoryDropdown", controller.getSupplierCategoryDropdown);
// router.post("/GetBankDropdown", controller.getBankDropdown);
router.post("/getCompanyCategoryDropdown", controller.getCompanyCategoryDropdown);
router.post("/getSupplierBranchDropdown", controller.getSupplierBranchDropdown);
module.exports = router;
