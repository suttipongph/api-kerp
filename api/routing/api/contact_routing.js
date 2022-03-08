const { Router } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../../controller/contact_controller");
router.post("/getContactTableList", controller.getContactTableList);
router.post("/getContactTableById", controller.getContactTableById);
router.post("/createContactTable", controller.createContactTable);
router.post("/editContactTable", controller.editContactTable);
router.post("/deleteContactTable", controller.deleteContactTable);
//#region  Dropdown
router.post(
  "/getEmergencyContactDropDown",
  controller.getEmergencyContactDropDown
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropDown);
//#endregion
//#region  EmergencyContact
router.post(
  "/Info/EmergencyContact/getEmergencyContactTableList",
  controller.getEmergencyContactTableList
);
router.post(
  "/Info/EmergencyContact/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/EmergencyContact/createEmergencyContactTable",
  controller.createEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/getEmergencyContactTableById",
  controller.getEmergencyContactTableById
);
router.post(
  "/Info/EmergencyContact/editEmergencyContactTable",
  controller.editEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/deleteEmergencyContactTable",
  controller.deleteEmergencyContactTable
);
//#endregion

module.exports = router;
