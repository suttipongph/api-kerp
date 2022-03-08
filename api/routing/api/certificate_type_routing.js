const express = require("express");
const router = express.Router();
const controller = require("../../controller/certificate_type_controller");
router.post(
  "/getCertificateTypeTableList",
  controller.getCertificateTypeTableList
);
router.post(
  "/getCertificateTypeTableById",
  controller.getCertificateTypeTableById
);
router.post(
  "/createCertificateTypeTable",
  controller.createCertificateTypeTable
);
router.post("/editCertificateTypeTable", controller.editCertificateTypeTable);
router.post(
  "/deleteCertificateTypeTable",
  controller.deleteCertificateTypeTable
);
module.exports = router;
