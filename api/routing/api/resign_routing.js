const express = require("express");
const router = express.Router();
const controller = require("../../controller/resign_controller");
const controllerEmployee = require("../../controller/employee_controller");
router.post(
  "/getEmployeeTableList",
  controllerEmployee.getEmployeeTableListByResign
);
router.post("/getEmployeeTableById", controllerEmployee.getEmployeeTableById);
router.post("/createEmployeeTable", controllerEmployee.createEmployeeTable);
router.post("/editEmployeeTable", controllerEmployee.editEmployeeTable);
router.post("/deleteEmployeeTable", controllerEmployee.deleteEmployeeTable);
router.post("/getPositionDropDown", controllerEmployee.getPositionDropdrown);
router.post("/getDepartmentDropDown", controllerEmployee.getDepartmentDropdown);
router.post("/getCountryDropDown", controllerEmployee.getCountryDropdown);
router.post("/getProvinceDropDown", controllerEmployee.getProvinceDropdown);
router.post("/getDistrictDropDown", controllerEmployee.getDistrictDropdown);
router.post(
  "/getSubDistrictDropDown",
  controllerEmployee.getSubDistrictDropdown
);
router.post(
  "/getNationalityDropDown",
  controllerEmployee.getNationalityDropDown
);
router.post("/getContactDropDown", controllerEmployee.getContactDropDown);
router.post("/getJobLevelDropdown", controllerEmployee.getJobLevelDropdown);
router.post("/getSalaryDropDown", controllerEmployee.getSalaryDropDown);
router.post(
  "/getEmployeeStatusDropDown",
  controllerEmployee.getEmployeeStatusDropDown
);
router.post(
  "/getEmergencyContactDropDown",
  controllerEmployee.getEmergencyContactDropDown
);
router.post("/getWelfareDropDown", controller.getWelfareDropDown);
router.post("/getResignTableList", controller.getResignTableList);
router.post("/getResignTableById", controller.getResignTableById);
router.post("/createResignTable", controller.createResignTable);
router.post("/editResignTable", controller.editResignTable);
router.post("/deleteResignTable", controller.deleteResignTable);
router.post("/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post("/getDocumentStatusDropDown", controller.getDocumentStatusDropDown);
router.post("/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/getPositionDropDown", controller.getPositionDropdown);
router.post("/getSalaryDropDown", controller.getSalaryDropDown);

router.post(
  "/Action/AdjustBacktowork/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustBacktowork/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustBacktowork/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustBacktowork/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustBacktowork/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustBacktowork/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustBacktowork/getAdjustBacktoworkInitialData",
  controller.getAdjustBacktoworkInitialData
);
router.post(
  "/Action/AdjustBacktowork/createResignTable",
  controller.createBacktoworkTable
);
router.post(
  "/Action/AdjustBacktowork/editEmployeeStatusBacktoworkTable",
  controller.editEmployeeStatusBacktoworkTable
);

router.post(
  "/Action/AdjustResign/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustResign/getAdjustResignInitialData",
  controller.getAdjustResignInitialData
);
router.post(
  "/Action/AdjustResign/createResignTable",
  controller.createResignTable
);
router.post(
  "/Action/AdjustResign/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustResign/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustResign/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustResign/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustResign/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustResign/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustResign/editAdjustResignPostStatus",
  controller.editAdjustResignPostStatus
);
router.post(
  "/Action/AdjustResign/getAdjustResignInitialPostStatusData",
  controller.getAdjustResignInitialPostStatusData
);
router.post(
  "/Action/AdjustResign/editAdjustResignPostStatus",
  controller.editAdjustResignPostStatus
);
router.post(
  "/Action/AdjustResign/editAdjustResignStatus",
  controller.editAdjustResignStatus
);
//
router.post(
  "/Action/AdjustResignApproved/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustResignApproved/getAdjustResignInitialApprovedStatusData",
  controller.getAdjustResignInitialApprovedStatusData
);
router.post(
  "/Action/AdjustResignApproved/createResignTable",
  controller.createResignTable
);
router.post(
  "/Action/AdjustResignApproved/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustResignApproved/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustResignApproved/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustResignApproved/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustResignApproved/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustResignApproved/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustResignApproved/editAdjustResignPostStatus",
  controller.editAdjustResignPostStatus
);
router.post(
  "/Action/AdjustResignApproved/editAdjustResignApprovedStatus",
  controller.editAdjustResignApprovedStatus
);
// router.post(
//   "/Action/AdjustResignApproved/getAdjustResignInitialRejectStatusData",
//   controller.getAdjustResignInitialRejectStatusData
// );

router.post(
  "/Action/AdjustResignReject/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustResignReject/getAdjustResignInitialRejectStatusData",
  controller.getAdjustResignInitialRejectStatusData
);
router.post(
  "/Action/AdjustResignReject/createResignTable",
  controller.createResignTable
);
router.post(
  "/Action/AdjustResignReject/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustResignReject/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustResignReject/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustResignReject/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustResignReject/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustResignReject/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustResignReject/editAdjustResignPostStatus",
  controller.editAdjustResignPostStatus
);
router.post(
  "/Action/AdjustResignReject/editAdjustResignApprovedStatus",
  controller.editRejectResignAndCreateRejectTrans
);

router.post(
  "/Action/AdjustResignComplate/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustResignComplate/getAdjustResignInitialComplateStatusData",
  controller.getAdjustResignInitialComplateStatusData
);
router.post(
  "/Action/AdjustResignComplate/createResignTable",
  controller.createResignTable
);
router.post(
  "/Action/AdjustResignComplate/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustResignComplate/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustResignComplate/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustResignComplate/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustResignComplate/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustResignComplate/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustResignComplate/editAdjustResignPostStatus",
  controller.editAdjustResignPostStatus
);
router.post(
  "/Action/AdjustResignComplate/editAdjustResignComplateStatus",
  controller.editAdjustResignComplateStatus
);
module.exports = router;
