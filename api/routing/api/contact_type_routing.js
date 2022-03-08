const express = require("express");
const router = express.Router();
const controller = require("../../controller/contact_type_controller");
router.post(
  "/getContactTypeTableList",
  controller.getContactTypeTableList
);
router.post(
  "/getContactTypeTableById",
  controller.getContactTypeTableById
);
router.post(
  "/createContactTypeTable",
  controller.createContactTypeTable
);
router.post("/editContactTypeTable", controller.editContactTypeTable);
router.post(
  "/deleteContactTypeTable",
  controller.deleteContactTypeTable
);
module.exports = router;
