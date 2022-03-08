const express = require("express");
const router = express.Router();
const controller = require("../../controller/work_experiencen_controller");
router.post(
  "/getWorkExperiencenTableList",
  controller.getWorkExperiencenTableList
);
router.post(
  "/getWorkExperiencenTableById",
  controller.getWorkExperiencenTableById
);
router.post(
  "/createWorkExperiencenTable",
  controller.createWorkExperiencenTable
);
router.post("/editWorkExperiencenTable", controller.editWorkExperiencenTable);
router.post(
  "/deleteWorkExperiencenTable",
  controller.deleteWorkExperiencenTable
);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
module.exports = router;
