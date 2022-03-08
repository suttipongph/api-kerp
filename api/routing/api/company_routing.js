const express = require("express");
const router = express.Router();
const controller = require("../../controller/company_controller");
router.post(
  "/getCompanyTableList",
  controller.getCompanyTableList
);
router.post(
  "/getCompanyTableById",
  controller.getCompanyTableById
);
router.post(
  "/createCompanyTable",
  controller.createCompanyTable
);
router.post("/editCompanyTable", controller.editCompanyTable);
router.post(
  "/deleteCompanyTable",
  controller.deleteCompanyTable
);
router.post("/GetBranchDropdown", controller.getBranchDropdown);
module.exports = router;
