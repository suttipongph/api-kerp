const express = require("express");
const router = express.Router();
const controller = require("../../controller/sub_district_controller");
router.post(
  "/getSubDistrictTableList",
  controller.getSubDistrictTableList
);
router.post(
  "/getSubDistrictTableById",
  controller.getSubDistrictTableById
);
router.post(
  "/createSubDistrictTable",
  controller.createSubDistrictTable
);
router.post(
    "/getDistrictDropDown",
    controller.getDistrictDropDown
  );
router.post("/editSubDistrictTable", controller.editSubDistrictTable);
router.post(
  "/deleteSubDistrictTable",
  controller.deleteSubDistrictTable
);
module.exports = router;
