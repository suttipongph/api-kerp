const express = require("express");
const router = express.Router();
const controller = require("../../controller/bookmarkdocument_template_controller");
router.post(
  "/getBookmarkdocumentTemplateTableList",
  controller.getBookmarkdocumentTemplateTableList
);
router.post(
  "/getBookmarkdocumentTemplateTableById",
  controller.getBookmarkdocumentTemplateTableById
);
router.post(
  "/createBookmarkdocumentTemplateTable",
  controller.createBookmarkdocumentTemplateTable
);
router.post(
  "/editBookmarkdocumentTemplateTable",
  controller.editBookmarkdocumentTemplateTable
);
router.post(
  "/deleteBookmarkdocumentTemplateTable",
  controller.deleteBookmarkdocumentTemplateTable
);
module.exports = router;
