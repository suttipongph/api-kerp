const express = require("express");
const router = express.Router();
const controller = require("../../controller/salary_trans_controller");
router.post("/getSalaryTransTableList", controller.getSalaryTransTableList);
router.post("/getSalaryTransTableById", controller.getSalaryTransTableById);
router.post("/createSalaryTransTable", controller.createSalaryTransTable);
router.post("/editSalaryTransTable", controller.editSalaryTransTable);
router.post("/deleteSalaryTransTable", controller.deleteSalaryTransTable);
router.post("/GetPositionDropdown", controller.getPositionDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);

//#region  Hr
router.post("/Hr/getSalaryTransTableList", controller.getSalaryTransTableList);
router.post("/Hr/getSalaryTransTableById", controller.getSalaryTransTableById);
router.post("/Hr/createSalaryTransTable", controller.createSalaryTransTable);
router.post("/Hr/editSalaryTransTable", controller.editSalaryTransTable);
router.post("/Hr/deleteSalaryTransTable", controller.deleteSalaryTransTable);
router.post("/Hr/getPositionDropDown", controller.getPositionDropdown);
router.post("/Hr/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/Hr/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/Hr/getSalaryDropDown", controller.getSalaryDropdown);
router.post(
  "/Hr/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region Lead
router.post(
  "/Lead/getSalaryTransTableList",
  controller.getSalaryTransTableList
);
router.post(
  "/Lead/getSalaryTransTableById",
  controller.getSalaryTransTableById
);
router.post("/Lead/createSalaryTransTable", controller.createSalaryTransTable);
router.post("/Lead/editSalaryTransTable", controller.editSalaryTransTable);
router.post("/Lead/deleteSalaryTransTable", controller.deleteSalaryTransTable);
router.post("/Lead/getPositionDropDown", controller.getPositionDropdown);
router.post("/Lead/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/Lead/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/Lead/getSalaryDropDown", controller.getSalaryDropdown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/PostAdjustSalary/getInitialAdjustSalaryPostStatus",
  controller.getInitialAdjustSalaryPostStatus
);

router.post(
  "/Action/PostAdjustSalary/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/PostAdjustSalary/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustSalary/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/PostAdjustSalary/getSalaryDropDown",
  controller.getSalaryDropdown
);
router.post(
  "/Action/PostAdjustSalary/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/PostAdjustSalary/editAdjustSalaryTable",
  controller.editSalaryTransTable
);

router.post(
  "/Action/CancelAdjustSalary/getInitialAdjustSalaryCancelStatus",
  controller.getInitialAdjustSalaryCancelStatus
);

router.post(
  "/Action/CancelAdjustSalary/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CancelAdjustSalary/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CancelAdjustSalary/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CancelAdjustSalary/getSalaryDropDown",
  controller.getSalaryDropdown
);
router.post(
  "/Action/CancelAdjustSalary/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CancelAdjustSalary/editAdjustSalaryTable",
  controller.editCancelStatusAndCreateRejectTransTable
);

router.post(
  "/Action/CompleteAdjustSalary/getInitialAdjustSalaryCompleteStatus",
  controller.getInitialAdjustSalaryCompleteStatus
);

router.post(
  "/Action/CompleteAdjustSalary/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CompleteAdjustSalary/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteAdjustSalary/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CompleteAdjustSalary/getSalaryDropDown",
  controller.getSalaryDropdown
);
router.post(
  "/Action/CompleteAdjustSalary/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CompleteAdjustSalary/editAdjustSalaryTable",
  controller.editSalaryTransTableComplete
);
//#endregion
module.exports = router;
