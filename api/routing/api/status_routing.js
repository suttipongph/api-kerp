const express = require("express");
const router = express.Router();
const controller = require("../../controller/status_controller");
router.post(
  "/getStatusTableList",
  controller.getStatusTableList
);
router.post(
  "/getStatusTableById",
  controller.getStatusTableById
);
router.post(
  "/createStatusTable",
  controller.createStatusTable
);
router.post("/editStatusTable", controller.editStatusTable);
router.post(
  "/deleteStatusTable",
  controller.deleteStatusTable
);
module.exports = router;
