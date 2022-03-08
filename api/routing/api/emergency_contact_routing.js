const express = require("express");
const router = express.Router();
const controller = require("../../controller/emergency_contact_controller");
router.post(
  "/getEmergencyContactTableList",
  controller.getEmergencyContactTableList
);
router.post(
  "/getEmergencyContactTableById",
  controller.getEmergencyContactTableById
);
router.post(
  "/createEmergencyContactTable",
  controller.createEmergencyContactTable
);
router.post("/editEmergencyContactTable", controller.editEmergencyContactTable);
router.post(
  "/deleteEmergencyContactTable",
  controller.deleteEmergencyContactTable
);
router.post("/getAddressDropDown", controller.getAddressDropdown);
router.post("/getCountryDropDown", controller.getCountryDropdown);
router.post("/getProvinceDropDown", controller.getProvinceDropdown);
router.post("/getDistrictDropDown", controller.getDistrictDropdown);
router.post("/getSubDistrictDropDown", controller.getSubDistrictDropdown);
module.exports = router;
