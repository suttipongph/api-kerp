const express = require("express");
const router = express.Router();
const controller = require("../../controller/revision_time_trans_controller");
router.post(
  "/getRevisionTimeTransTableList",
  controller.getRevisionTimeTransTableList
);
router.post(
  "/getRevisionTimeTransTableById",
  controller.getRevisionTimeTransTableById
);
router.post(
  "/createRevisionTimeTransTable",
  controller.createRevisionTimeTransTable
);
router.post(
  "/editRevisionTimeTransTable",
  controller.editRevisionTimeTransTable
);
router.post(
  "/deleteRevisionTimeTransTable",
  controller.deleteRevisionTimeTransTable
);
router.post("/GetDocumentStatusDropdown", controller.getDocumentStatusDropdown);

router.post(
  "/Lead/getRevisionTimeTransTableList",
  controller.getRevisionTimeTransTableList
);
router.post(
  "/Lead/getRevisionTimeTransTableById",
  controller.getRevisionTimeTransTableById
);
router.post("/Lead/getEmployeeDropDown", controller.getEmployeeDropDown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Lead/editRevisionTimeTransTable",
  controller.editRevisionTimeTransTable
);

router.post(
  "/Hr/getRevisionTimeTransTableList",
  controller.getRevisionTimeTransTableList
);
router.post(
  "/Hr/getRevisionTimeTransTableById",
  controller.getRevisionTimeTransTableById
);
router.post("/Hr/getEmployeeDropDown", controller.getEmployeeDropDown);
router.post(
  "/Hr/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Hr/editRevisionTimeTransTable",
  controller.editRevisionTimeTransTable
);
router.post(
  "/Action/Postrevisiontime/getPostInitialData",
  controller.getPostInitialData
);

router.post(
  "/Action/Postrevisiontime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/Postrevisiontime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Action/Postrevisiontime/postRevitionTimeTransTable",
  controller.postRevitionTimeTransTable
);
router.post(
  "/Action/Cancelrevisiontime/cancelRevitionTimeTransTable",
  controller.cancelRevitionTimeTransTable
);

router.post(
  "/Action/Cancelrevisiontime/getCancelInitialData",
  controller.getCancelInitialData
);

router.post(
  "/Action/Cancelrevisiontime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/Cancelrevisiontime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);

router.post(
  "/Action/Completerevisiontime/completeRevitionTimeTransTable",
  controller.completeRevitionTimeTransTable
);

router.post(
  "/Action/Completerevisiontime/getCompleteInitialData",
  controller.getCompleteInitialData
);

router.post(
  "/Action/Completerevisiontime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/Completerevisiontime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);

module.exports = router;
