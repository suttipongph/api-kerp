const express = require("express");
const router = express.Router();
const controller = require("../../controller/customer_branch_controller");
router.post(
  "/getCustomerBranchTableList",
  controller.getCustomerBranchTableList
);
router.post(
  "/getCustomerBranchTableById",
  controller.getCustomerBranchTableById
);
router.post(
  "/createCustomerBranchTable",
  controller.createCustomerBranchTable
);
router.post("/editCustomerBranchTable", controller.editCustomerBranchTable);
router.post(
  "/deleteCustomerBranchTable",
  controller.deleteCustomerBranchTable
);
module.exports = router;
