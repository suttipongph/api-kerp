const express = require("express");
const router = express.Router();
const controller = require("../../controller/blacklist_controller");
router.post(
  "/getBlacklistTableList",
  controller.getBlacklistTableList
);
router.post(
  "/getBlacklistTableById",
  controller.getBlacklistTableById
);
router.post(
  "/createBlacklistTable",
  controller.createBlacklistTable
);
router.post(
  "/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post("/editBlacklistTable", controller.editBlacklistTable);
router.post(
  "/deleteBlacklistTable",
  controller.deleteBlacklistTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
module.exports = router;
