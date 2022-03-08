const express = require("express");
const router = express.Router();
const controller = require("../../controller/company_category_controller");
router.post(
  "/getCompanyCategoryTableList",
  controller.getCompanyCategoryTableList
);
router.post(
  "/getCompanyCategoryTableById",
  controller.getCompanyCategoryTableById
);
router.post(
  "/createCompanyCategoryTable",
  controller.createCompanyCategoryTable
);
router.post("/editCompanyCategoryTable", controller.editCompanyCategoryTable);
router.post(
  "/deleteCompanyCategoryTable",
  controller.deleteCompanyCategoryTable
);
module.exports = router;
