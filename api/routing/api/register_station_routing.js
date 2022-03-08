const express = require("express");
const router = express.Router();
const controller = require("../../controller/register_station_controller");
router.post(
  "/getRegisterStationTableList",
  controller.getRegisterStationTableList
);
router.post(
  "/getRegisterStationTableById",
  controller.getRegisterStationTableById
);
router.post(
  "/createRegisterStationTable",
  controller.createRegisterStationTable
);
router.post("/editRegisterStationTable", controller.editRegisterStationTable);
router.post(
  "/deleteRegisterStationTable",
  controller.deleteRegisterStationTable
);
module.exports = router;
