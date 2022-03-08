const express = require("express");
const router = express.Router();
const controller = require("../../controller/item_category_tabel_controller");
router.post(
  "/getItemCategoryTabelTableList",
  controller.getItemCategoryTabelTableList
);
router.post(
  "/getItemCategoryTabelTableById",
  controller.getItemCategoryTabelTableById
);
router.post(
  "/createItemCategoryTabelTable",
  controller.createItemCategoryTabelTable
);
router.post("/editItemCategoryTabelTable", controller.editItemCategoryTabelTable);
router.post(
  "/deleteItemCategoryTabelTable",
  controller.deleteItemCategoryTabelTable
);
module.exports = router;
