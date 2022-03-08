const { query } = require("express");
const express = require("express");
const mTools = require("../../shared/tools/tools");
const controller = require("../../controller/dashboard_controller");

const pool = require("../../../db");
const router = express.Router();
router.post("/numblerows", controller.dashboard);
router.post("/numblerows/hr", controller.dashboard_hr);

module.exports = router;