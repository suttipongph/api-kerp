const express = require("express");
const router = express.Router();
const controller = require("../../controller/welfare_detail_controller");
router.post(
  "/getWelfareDetailTableList",
  controller.getWelfareDetailTableList
);
router.post(
  "/getWelfareDetailTableById",
  controller.getWelfareDetailTableById
);
router.post(
  "/createWelfareDetailTable",
  controller.createWelfareDetailTable
);
router.post("/editWelfareDetailTable", controller.editWelfareDetailTable);
router.post(
  "/deleteWelfareDetailTable",
  controller.deleteWelfareDetailTable
);
router.post("/GetWelfareDropdown", controller.getWelfareDropdown);
module.exports = router;
