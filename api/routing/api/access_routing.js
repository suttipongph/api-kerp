const express = require("express");
const router = express.Router();
const controller = require("../../controller/access_controller");
router.post("/getAccessTableList", controller.getAccessTableList);
router.post("/getAccessTableById", controller.getAccessTableById);
router.post("/createAccessTable", controller.createAccessTable);
router.post("/editAccessTable", controller.editAccessTable);
router.post("/deleteAccessTable", controller.deleteAccessTable);
router.post("/GetSubscribeTransDropDown", controller.getSubscribeTransDropdown);
router.post("/getRoleDropDown", controller.getRoleDropdown);
router.post(
  "/Action/CopyAccessFeature/getInitialdataForCoppyAccess",
  controller.getInitialdataForCoppyAccess
);

router.post(
  "/Action/CopyAccessFeature/getRoleDropDown",
  controller.getRoleDropdown
);
router.post(
  "/Action/CopyAccessFeature/CopyEditAccessTable",
  controller.CopyAccessFeatureFromRole
);
module.exports = router;
