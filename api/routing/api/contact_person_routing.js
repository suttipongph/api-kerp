const express = require("express");
const router = express.Router();
const controller = require("../../controller/contact_person_controller");
router.post(
  "/getContactPersonTableList",
  controller.getContactPersonTableList
);
router.post(
  "/getContactPersonTableById",
  controller.getContactPersonTableById
);
router.post(
  "/createContactPersonTable",
  controller.createContactPersonTable
);
router.post("/editContactPersonTable", controller.editContactPersonTable);
router.post(
  "/deleteContactPersonTable",
  controller.deleteContactPersonTable
);
router.post("/getStatusDropDown", controller.getStatusDropdown);
router.post("/getSuplierDropDown", controller.getSuplierDropdown);
router.post("/getCustomerDropDown", controller.getCustomerDropdown);
router.post("/getContactTypeDropDown", controller.getContactTypeDropDown);
router.post("/getInitialData", controller.getInitialDataContactPerson);

module.exports = router;
