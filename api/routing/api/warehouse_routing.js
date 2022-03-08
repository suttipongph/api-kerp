const express = require("express");
const router = express.Router();
const controller = require("../../controller/warehouse_controller");
router.post(
  "/getWarehouseTableList",
  controller.getWarehouseTableList
);
router.post(
  "/getWarehouseTableById",
  controller.getWarehouseTableById
);
router.post(
  "/createWarehouseTable",
  controller.createWarehouseTable
);
router.post("/editWarehouseTable", controller.editWarehouseTable);
router.post(
  "/deleteWarehouseTable",
  controller.deleteWarehouseTable
);
module.exports = router;
