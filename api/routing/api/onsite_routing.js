const express = require("express");
const router = express.Router();
const controller = require("../../controller/onsite_controller");
router.post(
  "/getOnsiteTableList",
  controller.getOnsiteTableList
);
router.post(
  "/getOnsiteTableById",
  controller.getOnsiteTableById
);
router.post(
  "/createOnsiteTable",
  controller.createOnsiteTable
);
router.post("/editOnsiteTable", controller.editOnsiteTable);
router.post(
  "/deleteOnsiteTable",
  controller.deleteOnsiteTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDocumentStatusDropdown", controller.getDocumentStatusDropdown);
module.exports = router;
