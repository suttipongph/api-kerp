const express = require("express");
const router = express.Router();
const controller = require("../../controller/customer_category_controller");
router.post(
  "/getCustomerCategoryTableList",
  controller.getCustomerCategoryTableList
);
router.post(
  "/getCustomerCategoryTableById",
  controller.getCustomerCategoryTableById
);
router.post(
  "/createCustomerCategoryTable",
  controller.createCustomerCategoryTable
);
router.post("/editCustomerCategoryTable", controller.editCustomerCategoryTable);
router.post(
  "/deleteCustomerCategoryTable",
  controller.deleteCustomerCategoryTable
);
router.post(
  "/getInitialData",
  controller.getInitialDataCustomerCategory
);
module.exports = router;
