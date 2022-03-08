const express = require("express");
const router = express.Router();
const controller = require("../../controller/address_controller");
router.post(
  "/getAddressTableList",
  controller.getAddressTableList
);
router.post(
  "/getAddressTableById",
  controller.getAddressTableById
);
router.post(
  "/createAddressTable",
  controller.createAddressTable
);
router.post("/editAddressTable", controller.editAddressTable);
router.post(
  "/deleteAddressTable",
  controller.deleteAddressTable
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/getCountryDropDown", controller.getCountryDropdown);
router.post("/getProvinceDropDown", controller.getProvinceDropdown);
router.post("/getDistrictDropDown", controller.getDistrictDropdown);
router.post("/getSubDistrictDropDown", controller.getSubDistrictDropdown);
module.exports = router;
