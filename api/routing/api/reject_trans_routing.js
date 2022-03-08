const express = require("express");
const router = express.Router();
const controller = require("../../controller/reject_trans_controller");
router.post(
  "/getRejectTransTableList",
  controller.getRejectTransTableList
);
router.post(
  "/getRejectTransTableById",
  controller.getRejectTransTableById
);
router.post(
  "/createRejectTransTable",
  controller.createRejectTransTable
);
router.post("/editRejectTransTable", controller.editRejectTransTable);
router.post(
  "/deleteRejectTransTable",
  controller.deleteRejectTransTable
);
module.exports = router;
