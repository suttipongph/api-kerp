const express = require("express");
const router = express.Router();
const controller = require("../../controller/access_rights_controller");
router.post("/getAccessRightsTableList", controller.getAccessRightsTableList);
router.post("/getAccessRightsTableById", controller.getAccessRightsTableById);
router.post("/createAccessRightsTable", controller.createAccessRightsTable);
router.post("/editAccessRightsTable", controller.editAccessRightsTable);
router.post("/deleteAccessRightsTable", controller.deleteAccessRightsTable);
router.post("/GetRoleDropdown", controller.getRoleDropdown);
module.exports = router;
