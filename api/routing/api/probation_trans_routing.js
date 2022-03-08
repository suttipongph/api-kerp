const express = require("express");
const router = express.Router();
const controller = require("../../controller/probation_trans_controller");
router.post(
  "/getProbationTransTableList",
  controller.getProbationTransTableList
);
router.post(
  "/getProbationTransTableById",
  controller.getProbationTransTableById
);
router.post("/createProbationTransTable", controller.createProbationTransTable);
router.post("/editProbationTransTable", controller.editProbationTransTable);
router.post("/deleteProbationTransTable", controller.deleteProbationTransTable);
router.post("/GetPositionDropdown", controller.getPositionDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);

router.post(
  "/Action/PostAdjustProbation/getInitialDataProbationPostStatus",
  controller.getInitialDataProbationPostStatus
);
router.post(
  "/Action/PostAdjustProbation/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/PostAdjustProbation/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/PostAdjustProbation/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustProbation/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/PostAdjustProbation/editProbationPostStatus",
  controller.editProbationTransTable
);
router.post(
  "/Action/PostAdjustProbation/getInitialDataProbationPostStatus",
  controller.getInitialDataProbationPostStatus
);
router.post(
  "/Action/PostAdjustProbation/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/PostAdjustProbation/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/PostAdjustProbation/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustProbation/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/PostAdjustProbation/editProbationPostStatus",
  controller.editProbationTransTable
);
router.post(
  "/Lead/getProbationTransTableList",
  controller.getProbationTransTableLeadList
);
router.post(
  "/Lead/getProbationTransTableById",
  controller.getProbationTransTableById
);
router.post(
  "/Lead/deleteProbationTransTable",
  controller.deleteProbationTransTable
);
router.post(
  "/Lead/editProbationTransTable",
  controller.editProbationTransTable
);
router.post("/Lead/getPositionDropdown", controller.getPositionDropdown);
router.post("/Lead/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Lead/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/CancelAdjustProbation/getInitialDataProbationCancelStatus",
  controller.getInitialDataProbationCancelStatus
);
router.post(
  "/Action/CancelAdjustProbation/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CancelAdjustProbation/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CancelAdjustProbation/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CancelAdjustProbation/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CancelAdjustProbation/editProbationCancelStatus",
  controller.editProbationCancelStatusAndCreateReject
);

router.post(
  "/Hr/getProbationTransTableList",
  controller.getProbationTransTableHrList
);
router.post(
  "/Hr/getProbationTransTableById",
  controller.getProbationTransTableById
);
router.post(
  "/Hr/deleteProbationTransTable",
  controller.deleteProbationTransTable
);

router.post("/Hr/getPositionDropdown", controller.getPositionDropdown);
router.post("/Hr/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Hr/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post(
  "/Hr/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/CompleteAdjustProbation/getInitialDataProbationCompleteStatus",
  controller.getInitialDataProbationCompleteStatus
);
router.post(
  "/Action/CompleteAdjustProbation/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CompleteAdjustProbation/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CompleteAdjustProbation/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteAdjustProbation/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CompleteAdjustProbation/editProbationCompleteStatus",
  controller.editProbationCompleteStatus
);

module.exports = router;
