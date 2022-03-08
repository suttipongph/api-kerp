const express = require("express");
const router = express.Router();
const controller = require("../../controller/responsibility_device_controller");
router.post(
  "/getResponsibilityDeviceTableList",
  controller.getResponsibilityDeviceTableList
);
router.post(
  "/getResponsibilityDeviceTableById",
  controller.getResponsibilityDeviceTableById
);
router.post(
  "/createResponsibilityDeviceTable",
  controller.createResponsibilityDeviceTable
);
router.post("/editResponsibilityDeviceTable", controller.editResponsibilityDeviceTable);
router.post(
  "/deleteResponsibilityDeviceTable",
  controller.deleteResponsibilityDeviceTable
);
router.post("/GetAssetsDropdown", controller.getAssetsDropdown);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDocumentStatusDropdown", controller.getDocumentStatusDropdown);
module.exports = router;
