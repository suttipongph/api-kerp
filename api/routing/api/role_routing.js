const express = require("express");
const router = express.Router();
const controller = require("../../controller/role_controller");
router.post(
  "/getRoleTableList",
  controller.getRoleTableList
);
router.post(
  "/getRoleTableById",
  controller.getRoleTableById
);
router.post(
  "/createRoleTable",
  controller.createRoleTable
);
router.post("/editRoleTable", controller.editRoleTable);
router.post(
  "/deleteRoleTable",
  controller.deleteRoleTable
);
module.exports = router;
