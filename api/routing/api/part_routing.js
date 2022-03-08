const express = require("express");
const router = express.Router();
const controller = require("../../controller/part_controller");
router.post(
  "/getPartTableList",
  controller.getPartTableList
);
router.post(
  "/getPartTableById",
  controller.getPartTableById
);
router.post(
  "/createPartTable",
  controller.createPartTable
);
router.post("/editPartTable", controller.editPartTable);
router.post(
  "/deletePartTable",
  controller.deletePartTable
);
router.post("/getUnitDropDown", controller.getUnitDropdown);
module.exports = router;
