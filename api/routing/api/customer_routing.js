const express = require("express");
const router = express.Router();
const controller = require("../../controller/customer_controller");
router.post(
  "/getCustomerTableList",
  controller.getCustomerTableList
);
router.post(
  "/getCustomerTableById",
  controller.getCustomerTableById
);
router.post(
  "/createCustomerTable",
  controller.createCustomerTable
);
router.post("/editCustomerTable", controller.editCustomerTable);
router.post(
  "/deleteCustomerTable",
  controller.deleteCustomerTable
);
router.post("/getCustomerBranchDropDown", controller.getCustomerBranchDropDown);
router.post("/getCustomerCategoryDropDown", controller.getCustomerCategoryDropDown);
router.post("/getAddressDropDown", controller.getAddressDropdown);
router.post("/getInitialData", controller.getInitialDataCustomer);
// router.post("/GetCreditTermDropdown", controller.getCreditTermDropdown);
// router.post("/GetBankDropdown", controller.getBankDropdown);
module.exports = router;
