const express = require("express");
const router = express.Router();
const controller = require("../../controller/certificate_trans_controller");
router.post(
  "/getCertificateTransTableList",
  controller.getCertificateTransTableList
);
router.post(
  "/getCertificateTransTableById",
  controller.getCertificateTransTableById
);
router.post(
  "/createCertificateTransTable",
  controller.createCertificateTransTable
);
router.post("/editCertificateTransTable", controller.editCertificateTransTable);
router.post(
  "/deleteCertificateTransTable",
  controller.deleteCertificateTransTable
);
router.post(
  "/getCertificateTypeDropDown",
  controller.getCertificateTpyeDropdown
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/getSalaryDropDown", controller.getSalaryDropdown);
router.post("/getPositionDropDown", controller.getPositionDropdown);
module.exports = router;
