const express = require("express");
const router = express.Router();
const controller = require("../../controller/overtime_controller");
router.post("/getOvertimeTableList", controller.getOvertimeTableList);
router.post("/getOvertimeTableById", controller.getOvertimeTableById);
router.post("/createOvertimeTable", controller.createOvertimeTable);
router.post("/editOvertimeTable", controller.editOvertimeTable);
router.post("/deleteOvertimeTable", controller.deleteOvertimeTable);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetPositionDropdown", controller.getPositionDropdown);

router.post("/Lead/getOvertimeTableList", controller.getOvertimeTableList);
router.post("/Lead/getOvertimeTableById", controller.getOvertimeTableById);
router.post("/Lead/createOvertimeTable", controller.createOvertimeTable);
router.post("/Lead/editOvertimeTable", controller.editOvertimeTable);
router.post("/Lead/deleteOvertimeTable", controller.deleteOvertimeTable);
router.post("/Lead/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/Lead/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Lead/getPositionDropdown", controller.getPositionDropdown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/PostOvertime/getOvertimePostInitialData",
  controller.getOvertimePostInitialData
);

router.post(
  "/Action/PostOvertime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/PostOvertime/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostOvertime/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/PostOvertime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/PostOvertime/editOvertimeTable",
  controller.editOvertimeTable
);

router.post(
  "/Action/ApproveOvertime/getOvertimeApproveInitialData",
  controller.getOvertimeApproveInitialData
);

router.post(
  "/Action/ApproveOvertime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/ApproveOvertime/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/ApproveOvertime/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/ApproveOvertime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/ApproveOvertime/editOvertimeTable",
  controller.editOvertimeTable
);

router.post("/Hr/getOvertimeTableList", controller.getOvertimeTableList);
router.post("/Hr/getOvertimeTableById", controller.getOvertimeTableById);
router.post("/Hr/createOvertimeTable", controller.createOvertimeTable);
router.post("/Hr/editOvertimeTable", controller.editOvertimeTable);
router.post("/Hr/deleteOvertimeTable", controller.deleteOvertimeTable);
router.post("/Hr/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/Hr/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Hr/getPositionDropdown", controller.getPositionDropdown);
router.post(
  "/Hr/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CompleteOvertime/getOvertimeCompleteInitialData",
  controller.getOvertimeCompleteInitialData
);
router.post(
  "/Action/CompleteOvertime/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CompleteOvertime/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteOvertime/getPositionDropdown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CompleteOvertime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CompleteOvertime/editOvertimeTable",
  controller.editOvertimeTable
);
router.post(
  "/Action/RejectOvertime/getOvertimeRejectInitialData",
  controller.getOvertimeRejectInitialData
);

router.post(
  "/Action/RejectOvertime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/RejectOvertime/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/RejectOvertime/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/RejectOvertime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/RejectOvertime/editOvertimeTable",
  controller.editRejectOvertime
);
module.exports = router;
