const express = require("express");
const router = express.Router();
const controller = require("../../controller/leave_trans_controller");
router.post(
  "/getLeaveTransTableList",
  controller.getLeaveTransTableList
);
router.post(
  "/getLeaveTransTableById",
  controller.getLeaveTransTableById
);
router.post(
  "/createLeaveTransTable",
  controller.createLeaveTransTable
);
router.post(
  "/editLeaveTransTable",
 controller.editLeaveTransTable
 );
router.post(
  "/deleteLeaveTransTable",
  controller.deleteLeaveTransTable
);
router.post(
  "/getInitialData",
  controller.getInitialData
);

router.post(
  "/getLeaveTransTypeDropdown",
   controller.getLeaveTransTypeDropdown
);
router.post(
  "/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/getDocumentStatusDropDown",
   controller.getDocumentStatusDropdown
);

router.post(
  "/Action/AdjustLeaveTrans/editAdjustLeaveTransStatus",
   controller.editAdjustLeaveTransStatus
   );
router.post(
  "/Action/AdjustLeaveTrans/getAdjustLeaveTransInitialPostStatusData",
   controller.getAdjustLeaveTransInitialPostStatusData
);
router.post(
  "/Action/AdjustLeaveTrans/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTrans/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTrans/getDepartmentDropDown",
   controller.getDepartmentDropDown
);
router.post(
  "/Action/AdjustLeaveTrans/getPositionDropDown",
   controller.getPositionDropDown
);
router.post(
  "/Action/AdjustLeaveTrans/getSalaryDropDown",
   controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustLeaveTrans/getLeaveTransTypeDropDown",
   controller.getLeaveTransTypeDropdown
);
router.post(
  "/Action/AdjustLeaveTrans/getDocumentStatusDropDown",
   controller.getDocumentStatusDropdown
);

router.post(
  "/Action/AdjustLeaveTransApproved/editAdjustLeaveTransApprovedStatus",
   controller.editAdjustLeaveTransApprovedStatus
   );
router.post(
  "/Action/AdjustLeaveTransApproved/getAdjustLeaveTransInitialApprovedStatusData",
   controller.getAdjustLeaveTransInitialApprovedStatusData
);
router.post(
  "/Action/AdjustLeaveTransApproved/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getDepartmentDropDown",
   controller.getDepartmentDropDown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getPositionDropDown",
   controller.getPositionDropDown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getSalaryDropDown",
   controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getLeaveTransTypeDropDown",
   controller.getLeaveTransTypeDropdown
);
router.post(
  "/Action/AdjustLeaveTransApproved/getDocumentStatusDropDown",
   controller.getDocumentStatusDropdown
);

router.post(
  "/Action/AdjustLeaveTransReject/editAdjustLeaveTransRejectStatus",
   controller.editAdjustLeaveTransRejectStatus
   );
router.post(
  "/Action/AdjustLeaveTransReject/getAdjustLeaveTransInitialRejectStatusData",
   controller.getAdjustLeaveTransInitialRejectStatusData
);
router.post(
  "/Action/AdjustLeaveTransReject/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransReject/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransReject/getDepartmentDropDown",
   controller.getDepartmentDropDown
);
router.post(
  "/Action/AdjustLeaveTransReject/getPositionDropDown",
   controller.getPositionDropDown
);
router.post(
  "/Action/AdjustLeaveTransReject/getSalaryDropDown",
   controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustLeaveTransReject/getLeaveTransTypeDropDown",
   controller.getLeaveTransTypeDropdown
);
router.post(
  "/Action/AdjustLeaveTransReject/getDocumentStatusDropDown",
   controller.getDocumentStatusDropdown
);

router.post(
  "/Action/AdjustLeaveTransComplate/editAdjustLeaveTransComplateStatus",
   controller.editAdjustLeaveTransComplateStatus
   );
router.post(
  "/Action/AdjustLeaveTransComplate/getAdjustLeaveTransInitialComplateStatusData",
   controller.getAdjustLeaveTransInitialComplateStatusData
);
router.post(
  "/Action/AdjustLeaveTransComplate/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getEmployeeDropDown",
   controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getDepartmentDropDown",
   controller.getDepartmentDropDown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getPositionDropDown",
   controller.getPositionDropDown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getSalaryDropDown",
   controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getLeaveTransTypeDropDown",
   controller.getLeaveTransTypeDropdown
);
router.post(
  "/Action/AdjustLeaveTransComplate/getDocumentStatusDropDown",
   controller.getDocumentStatusDropdown
);
module.exports = router;
