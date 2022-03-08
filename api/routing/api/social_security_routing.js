const express = require("express");
const router = express.Router();
const controller = require("../../controller/social_security_controller");
router.post(
  "/getSocialSecurityTableList",
  controller.getSocialSecurityTableList
);
router.post(
  "/getSocialSecurityTableById",
  controller.getSocialSecurityTableById
);
router.post(
  "/createSocialSecurityTable",
  controller.createSocialSecurityTable
);
router.post("/editSocialSecurityTable", controller.editSocialSecurityTable);
router.post(
  "/deleteSocialSecurityTable",
  controller.deleteSocialSecurityTable
);
module.exports = router;
