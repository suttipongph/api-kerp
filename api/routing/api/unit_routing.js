const express = require("express");
const router = express.Router();
const controller = require("../../controller/unit_controller");
router.post("/getUnitTableList", controller.getUnitTableList);
router.post("/getUnitTableById", controller.getUnitTableById);
router.post("/createUnitTable", controller.createUnitTable);
router.post("/editUnitTable", controller.editUnitTable);
router.post("/deleteUnitTable", controller.deleteUnitTable);
module.exports = router;
