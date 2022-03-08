const express = require("express");
const router = express.Router();
const controller = require("../../controller/welfare_controller");
router.post("/getWelfareTableList", controller.getWelfareTableList);
router.post("/getWelfareTableById", controller.getWelfareTableById);
router.post("/createWelfareTable", controller.createWelfareTable);
router.post("/editWelfareTable", controller.editWelfareTable);
router.post("/deleteWelfareTable", controller.deleteWelfareTable);
//#region welfare Detail
router.post(
  "/Info/WelfareDetail/getWelfareDetailTableList",
  controller.getWelfareDetailTableList
);
router.post(
  "/Info/WelfareDetail/getWelfareDetailTableById",
  controller.getWelfareDetailTableById
);
router.post(
  "/Info/WelfareDetail/createWelfareDetailTable",
  controller.createWelfareDetailTable
);
router.post(
  "/Info/WelfareDetail/editWelfareDetailTable",
  controller.editWelfareDetailTable
);
router.post(
  "/Info/WelfareDetail/deleteWelfareDetailTable",
  controller.deleteWelfareDetailTable
);
router.post(
  "/Info/WelfareDetail/GetWelfareDropdown",
  controller.getWelfareDropdown
);
//#endregion
module.exports = router;
