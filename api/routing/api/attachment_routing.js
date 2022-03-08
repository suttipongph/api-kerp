const express = require("express");
const router = express.Router();
const controller = require("../../controller/attachment_controller");
router.post(
  "/getAttachmentTableList",
  controller.getAttachmentTableList
);
router.post(
  "/getAttachmentTableById",
  controller.getAttachmentTableById
);
router.post(
  "/createAttachmentTable",
  controller.createAttachmentTable
);
router.post("/editAttachmentTable", controller.editAttachmentTable);
router.post(
  "/deleteAttachmentTable",
  controller.deleteAttachmentTable
);
module.exports = router;
