const express = require("express");
const router = express.Router();
const controller = require("../../controller/salary_controller");
router.post(
  "/getSalaryTableList",
  controller.getSalaryTableList
);
router.post(
  "/getSalaryTableById",
  controller.getSalaryTableById
);
router.post(
  "/createSalaryTable",
  controller.createSalaryTable
);
router.post("/editSalaryTable", controller.editSalaryTable);
router.post(
  "/deleteSalaryTable",
  controller.deleteSalaryTable
);
module.exports = router;
