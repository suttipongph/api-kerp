const express = require("express");
const router = express.Router();
const controller = require("../../controller/category_controller");
router.post(
  "/getCategoryTableList",
  controller.getCategoryTableList
);
router.post(
  "/getCategoryTableById",
  controller.getCategoryTableById
);
router.post(
  "/createCategoryTable",
  controller.createCategoryTable
);
router.post("/editCategoryTable", controller.editCategoryTable);
router.post(
  "/deleteCategoryTable",
  controller.deleteCategoryTable
);
module.exports = router;
