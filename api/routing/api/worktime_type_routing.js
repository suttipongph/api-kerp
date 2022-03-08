const express = require("express");
const router = express.Router();
const controller = require("../../controller/worktime_type_controller");
router.post("/getWorktimeTypeTableList", controller.getWorktimeTypeTableList);
router.post("/getWorktimeTypeTableById", controller.getWorktimeTypeTableById);
router.post("/createWorktimeTypeTable", controller.createWorktimeTypeTable);
router.post("/editWorktimeTypeTable", controller.editWorktimeTypeTable);
router.post("/deleteWorktimeTypeTable", controller.deleteWorktimeTypeTable);
module.exports = router;
