const express = require("express");
const router = express.Router();
const controller = require("../../controller/punishment_trans_controller");
router.post(
  "/getPunishmentTransTableList",
  controller.getPunishmentTransTableList
);
router.post(
  "/getPunishmentTransTableById",
  controller.getPunishmentTransTableById
);
router.post(
  "/createPunishmentTransTable",
  controller.createPunishmentTransTable
);
router.post("/editPunishmentTransTable", controller.editPunishmentTransTable);
router.post(
  "/deletePunishmentTransTable",
  controller.deletePunishmentTransTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetPunishmentTypeDropdown", controller.getPunishmentTypeDropdown);
module.exports = router;
