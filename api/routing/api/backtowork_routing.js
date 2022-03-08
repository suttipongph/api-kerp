const express = require("express");
const router = express.Router();
const controller = require("../../controller/backtowork_controller");
router.post(
  "/getBacktoworkTableList",
  controller.getBacktoworkTableList
);
router.post(
  "/getBacktoworkTableById",
  controller.getBacktoworkTableById
);
router.post(
  "/createBacktoworkTable",
  controller.createBacktoworkTable
);
router.post("/editBacktoworkTable", controller.editBacktoworkTable);
router.post(
  "/deleteBacktoworkTable",
  controller.deleteBacktoworkTable
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/getPositionDropDown", controller.getPositionDropdown);
router.post("/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/getSalaryDropDown", controller.getSalaryDropdown);
module.exports = router;
