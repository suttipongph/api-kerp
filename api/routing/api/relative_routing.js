const express = require("express");
const router = express.Router();
const controller = require("../../controller/relative_controller");
router.post(
  "/getRelativeTableList",
  controller.getRelativeTableList
);
router.post(
  "/getRelativeTableById",
  controller.getRelativeTableById
);
router.post(
  "/createRelativeTable",
  controller.createRelativeTable
);
router.post("/editRelativeTable", controller.editRelativeTable);
router.post(
  "/deleteRelativeTable",
  controller.deleteRelativeTable
);
module.exports = router;
