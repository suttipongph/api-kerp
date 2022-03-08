const express = require("express");
const router = express.Router();
const controller = require("../../controller/department_controller");
router.post(
  "/getDepartmentTableList",
  controller.getDepartmentTableList
);
router.post(
  "/getDepartmentTableById",
  controller.getDepartmentTableById
);
router.post(
  "/createDepartmentTable",
  controller.createDepartmentTable
);
router.post("/editDepartmentTable", controller.editDepartmentTable);
router.post(
  "/deleteDepartmentTable",
  controller.deleteDepartmentTable
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/GetPositionDropDown", controller.getPositionDropdown);
module.exports = router;
