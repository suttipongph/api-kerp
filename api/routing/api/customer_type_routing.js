const express = require("express");
const router = express.Router();
const controller = require("../../controller/customer_type_controller");
router.post(
  "/getCustomerTypeTableList",
  controller.getCustomerTypeTableList
);
router.post(
  "/getCustomerTypeTableById",
  controller.getCustomerTypeTableById
);
router.post(
  "/createCustomerTypeTable",
  controller.createCustomerTypeTable
);
router.post("/editCustomerTypeTable", controller.editCustomerTypeTable);
router.post(
  "/deleteCustomerTypeTable",
  controller.deleteCustomerTypeTable
);
module.exports = router;
