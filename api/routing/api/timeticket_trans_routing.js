const express = require("express");
const router = express.Router();
const controller = require("../../controller/timeticket_trans_controller");
router.post(
  "/getTimeticketTransTableList",
  controller.getTimeticketTransTableList
);
router.post(
  "/getTimeticketTransTableById",
  controller.getTimeticketTransTableById
);
router.post(
  "/createTimeticketTransTable",
  controller.createTimeticketTransTable
);
router.post("/editTimeticketTransTable", controller.editTimeticketTransTable);
router.post(
  "/deleteTimeticketTransTable",
  controller.deleteTimeticketTransTable
);
module.exports = router;
