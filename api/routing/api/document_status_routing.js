const express = require("express");
const router = express.Router();
const controller = require("../../controller/document_status_controller");
router.post(
  "/getDocumentStatusTableList",
  controller.getDocumentStatusTableList
);
router.post(
  "/getDocumentStatusTableById",
  controller.getDocumentStatusTableById
);
router.post(
  "/createDocumentStatusTable",
  controller.createDocumentStatusTable
);
router.post("/editDocumentStatusTable", controller.editDocumentStatusTable);
router.post(
  "/deleteDocumentStatusTable",
  controller.deleteDocumentStatusTable
);
module.exports = router;
