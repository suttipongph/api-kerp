const express = require("express");
const router = express.Router();
const controller = require("../../controller/legal_punishment_detail_controller");
router.post(
  "/getLegalPunishmentDetailTableList",
  controller.getLegalPunishmentDetailTableList
);
router.post(
  "/getLegalPunishmentDetailTableById",
  controller.getLegalPunishmentDetailTableById
);
router.post(
  "/createLegalPunishmentDetailTable",
  controller.createLegalPunishmentDetailTable
);
router.post(
  "/editLegalPunishmentDetailTable",
  controller.editLegalPunishmentDetailTable
);
router.post(
  "/deleteLegalPunishmentDetailTable",
  controller.deleteLegalPunishmentDetailTable
);
router.post(
  "/getLegalPunishmentDropdown",
  controller.getLegalPunishmentDropdown
);

module.exports = router;
