const express = require("express");
const router = express.Router();
const controller = require("../../controller/country_controller");
router.post(
  "/getCountryTableList",
  controller.getCountryTableList
);
router.post(
  "/getCountryTableById",
  controller.getCountryTableById
);
router.post(
  "/createCountryTable",
  controller.createCountryTable
);
router.post("/editCountryTable", controller.editCountryTable);
router.post(
  "/deleteCountryTable",
  controller.deleteCountryTable
);
module.exports = router;
