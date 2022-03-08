const express = require("express");
const router = express.Router();
const controller = require("../../controller/position_controller");
router.post("/getPositionTableList", controller.getPositionTableList);
router.post("/getPositionTableById", controller.getPositionTableById);
router.post("/createPositionTable", controller.createPositionTable);
router.post("/getEmployeeDropDown", controller.getEmployeeDropDown);
router.post("/editPositionTable", controller.editPositionTable);
router.post("/deletePositionTable", controller.deletePositionTable);
router.post("/getDepartmentDropDown", controller.getDepartmentDropDown);

module.exports = router;
