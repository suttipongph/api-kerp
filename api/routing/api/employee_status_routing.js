const express = require("express");
const router = express.Router();
const controller = require("../../controller/employee_status_controller");
router.post(
  "/getEmployeeStatusTableList",
  controller.getEmployeeStatusTableList
);
router.post(
  "/getEmployeeStatusTableById",
  controller.getEmployeeStatusTableById
);
router.post(
  "/createEmployeeStatusTable",
  controller.createEmployeeStatusTable
);
router.post("/editEmployeeStatusTable", controller.editEmployeeStatusTable);
router.post(
  "/deleteEmployeeStatusTable",
  controller.deleteEmployeeStatusTable
);
module.exports = router;
