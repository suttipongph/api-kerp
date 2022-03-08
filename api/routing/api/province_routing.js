const express = require("express");
const router = express.Router();
const controller = require("../../controller/province_controller");
router.post("/getProvinceTableList", controller.getProvinceTableList);
router.post("/getProvinceTableById", controller.getProvinceTableById);
router.post("/createProvinceTable", controller.createProvinceTable);
router.post("/editProvinceTable", controller.editProvinceTable);
router.post("/deleteProvinceTable", controller.deleteProvinceTable);
router.post("/getCountryDropDown", controller.getCountryDropDown);
module.exports = router;
