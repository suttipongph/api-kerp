const express = require("express");
const router = express.Router();
const controller = require("../../controller/legal_punishment_controller");
const route = require("../route");
router.post(
  "/getLegalPunishmentTableList",
  controller.getLegalPunishmentTableList
);
router.post(
  "/getLegalPunishmentTableById",
  controller.getLegalPunishmentTableById
);
router.post(
  "/createLegalPunishmentTable",
  controller.createLegalPunishmentTable
);
router.post("/editLegalPunishmentTable", controller.editLegalPunishmentTable);
router.post(
  "/deleteLegalPunishmentTable",
  controller.deleteLegalPunishmentTable
);
//#legalpunishment
router.post(
  "/Info/LegalPunishmentDetail/createLegalPunishmentDetailTable",
  controller.createLegalPunishmentDetailTable
);
router.post(
  "/Info/LegalPunishmentDetail/getLegalPunishmentDetailTableList",
  controller.getLegalPunishmentDetailTableList
);
router.post(
  "/Info/LegalPunishmentDetail/editLegalPunishmentDetailTable",
  controller.editLegalPunishmentDetailTable
);
router.post(
  "/Info/LegalPunishmentDetail/deleteLegalPunishmentDetailTable",
  controller.deleteLegalPunishmentDetailTable
);
router.post(
  "/Info/LegalPunishmentDetail/getLegalPunishmentDetailTableById",
  controller.getLegalPunishmentDetailTableById
);
router.post(
  "/Info/LegalPunishmentDetail/getLegalPunishmentDetailDropdown",
  controller.getLegalPunishmentDetailDropdown
);
router.post(
  "/Info/LegalPunishmentDetail/getLegalPunishmentDropDown",
  controller.getLegalPunishmentDropDown
);

//#end legalpunishment
module.exports = router;
