const express = require("express");
const router = express.Router();
const controller = require("../../controller/punishment_type_controller");
router.post(
  "/getPunishmentTypeTableList",
  controller.getPunishmentTypeTableList
);
router.post(
  "/getPunishmentTypeTableById",
  controller.getPunishmentTypeTableById
);
router.post(
  "/createPunishmentTypeTable",
  controller.createPunishmentTypeTable
);
router.post("/editPunishmentTypeTable", controller.editPunishmentTypeTable);
router.post(
  "/deletePunishmentTypeTable",
  controller.deletePunishmentTypeTable
);
module.exports = router;
