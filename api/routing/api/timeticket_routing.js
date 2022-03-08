const express = require("express");
const router = express.Router();
const controller = require("../../controller/timeticket_controller");
router.post("/getTimeticketTableList", controller.getTimeticketTableList);
router.post("/getTimeticketTableById", controller.getTimeticketTableById);
router.post("/createTimeticketTable", controller.createTimeticketTable);
router.post("/editTimeticketTable", controller.editTimeticketTable);
router.post("/deleteTimeticketTable", controller.deleteTimeticketTable);
router.post("/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/getPositionDropdown", controller.getPositionDropdown);
router.post("/getTimeticketInitialData", controller.getTimeticketInitialData);

router.post("/Info/JobTrans/getInitialData", controller.getInitialDataJobTrans);
router.post(
  "/Info/JobTrans/getJobTransTableList",
  controller.getJobTransTableList
);
router.post(
  "/Info/JobTrans/getJobTransTableById",
  controller.getJobTransTableById
);
router.post(
  "/Info/JobTrans/createJobTransTable",
  controller.createJobTransTable
);
router.post("/Info/JobTrans/editJobTransTable", controller.editJobTransTable);
router.post(
  "/Info/JobTrans/deleteJobTransTable",
  controller.deleteJobTransTable
);
router.post("/Info/JobTrans/getJobDropDown", controller.getJobDropdown);
router.post(
  "/Info/JobTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post("/getDepartmentDropDown", controller.getDepartmentDropdown);

router.post(
  "/Action/Revisiontime/getRequestRevitionTimeTableById",
  controller.getRequestRevitionTimeTableById
);
router.post(
  "/Action/Revisiontime/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/Revisiontime/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/Revisiontime/getEmployeeDropDown",
  controller.getEmployeeDropdown
);

router.post(
  "/Action/Revisiontime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/Revisiontime/createRevitionTimeTransTable",
  controller.createRevitionTimeTransTable
);

router.post(
  "/Info/RevisionTimeTrans/getRevisionTimeTransTableList",
  controller.getRevisionTimeTransTableList
);

router.post(
  "/Action/Revisiontime/postRevisionTime",
  controller.postRevisionTime
);

router.post(
  "/Info/RevisionTimeTrans/getInitialDataRevisionTimeTransTable",
  controller.getInitialDataRevisionTimeTransTable
);

router.post(
  "/Info/RevisionTimeTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Info/RevisionTimeTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/RevisionTimeTrans/getRevisionTimeTransTableById",
  controller.getRevisionTimeTransTableById
);
router.post(
  "/Info/RevisionTimeTrans/editRevisionTimeTransTable",
  controller.editRevisionTimeTransTable
);

router.post(
  "/Info/RevisionTimeTrans/deleteRevisionTimeTransTable",
  controller.deleteRevisionTimeTransTable
);
router.post(
  "/Action/ImportTimeticket/importTimeticketTable",
  controller.importTimeticketTable
);

router.post(
  "/Action/ImportTimeticket/importTimticket",
  controller.importTimticket
);

module.exports = router;
