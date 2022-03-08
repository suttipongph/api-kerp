const express = require("express");
const router = express.Router();
const controller = require("../../controller/district_controller");
router.post(
  "/getDistrictTableList",
  controller.getDistrictTableList
);
router.post(
  "/getDistrictTableById",
  controller.getDistrictTableById
);
router.post(
  "/createDistrictTable",
  controller.createDistrictTable
);
router.post(
    "/getProvinceDropDown",
    controller.getProvinceDropDown
  );
router.post(
    "/editDistrictTable",
     controller.editDistrictTable
     );
router.post(
  "/deleteDistrictTable",
  controller.deleteDistrictTable
);
module.exports = router;
