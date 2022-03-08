const express = require("express");
const router = express.Router();
const controller = require("../../controller/employee_category_controller");
router.post(
  "/getEmployeeCategoryTableList",
  controller.getEmployeeCategoryTableList
);
router.post(
  "/getEmployeeCategoryTableById",
  controller.getEmployeeCategoryTableById
);
router.post(
  "/createEmployeeCategoryTable",
  controller.createEmployeeCategoryTable
);
router.post("/editEmployeeCategoryTable", controller.editEmployeeCategoryTable);
router.post(
  "/deleteEmployeeCategoryTable",
  controller.deleteEmployeeCategoryTable
);

module.exports = router;
