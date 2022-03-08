const express = require("express");
const router = express.Router();
const controller = require("../../controller/branch_controller");
router.post("/getBranchTableList", controller.getBranchTableList);
router.post("/getBranchTableById", controller.getBranchTableById);
router.post("/createBranchTable", controller.createBranchTable);
router.post("/editBranchTable", controller.editBranchTable);
router.post("/deleteBranchTable", controller.deleteBranchTable);
router.post("/getBranchTableListByCompany", controller.getListBranchForPage);
module.exports = router;