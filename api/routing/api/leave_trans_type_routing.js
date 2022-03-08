const express = require("express");
const router = express.Router();
const controller = require("../../controller/leave_trans_type_controller");
router.post(
  "/getLeaveTransTypeTableList",
  controller.getLeaveTransTypeTableList
);
router.post(
  "/getLeaveTransTypeTableById",
  controller.getLeaveTransTypeTableById
);
router.post(
  "/createLeaveTransTypeTable",
  controller.createLeaveTransTypeTable
);
router.post("/editLeaveTransTypeTable", controller.editLeaveTransTypeTable);
router.post(
  "/deleteLeaveTransTypeTable",
  controller.deleteLeaveTransTypeTable
);
router.post(
  "/getLeaveTransTypeCode",
  controller.getLeaveTransTypeCode
);
module.exports = router;
