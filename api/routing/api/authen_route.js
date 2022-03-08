const express = require("express");
const authen_controller = require("../../controller/authen_controller");
const { checkUserAccount } = require("../../controller/authen_controller");
const router = express.Router();
const users_controller = require("../../controller/authen_controller");

router.post("/", authen_controller.checkUserAccount);
router.post("/login", authen_controller.login);
router.post("/getRefreshToken", authen_controller.refreshToken);

module.exports = router;
