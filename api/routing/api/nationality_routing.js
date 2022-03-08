const express = require("express");
const router = express.Router();
const controller = require("../../controller/nationality_controller");
router.post(
  "/getNationalityTableList",
  controller.getNationalityTableList
);
router.post(
  "/getNationalityTableById",
  controller.getNationalityTableById
);
router.post(
  "/createNationalityTable",
  controller.createNationalityTable
);
router.post("/editNationalityTable", controller.editNationalityTable);
router.post(
  "/deleteNationalityTable",
  controller.deleteNationalityTable
);
module.exports = router;
