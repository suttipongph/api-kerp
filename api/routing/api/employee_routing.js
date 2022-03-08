const express = require("express");
const router = express.Router();
const controller = require("../../controller/employee_controller");
const route = require("../route");
router.post("/getEmployeeTableList", controller.getEmployeeTableList);
router.post("/getEmployeeTableById", controller.getEmployeeTableById);
router.post("/createEmployeeTable", controller.createEmployeeTable);
router.post("/editEmployeeTable", controller.editEmployeeTable);
router.post("/deleteEmployeeTable", controller.deleteEmployeeTable);
router.post("/getPositionDropDown", controller.getPositionDropdrown);
router.post("/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/getCountryDropDown", controller.getCountryDropdown);
router.post("/getProvinceDropDown", controller.getProvinceDropdown);
router.post("/getDistrictDropDown", controller.getDistrictDropdown);
router.post("/getSubDistrictDropDown", controller.getSubDistrictDropdown);
router.post("/getNationalityDropDown", controller.getNationalityDropDown);
router.post("/getContactDropDown", controller.getContactDropDown);
router.post("/getJobLevelDropdown", controller.getJobLevelDropdown);
router.post("/getSalaryDropDown", controller.getSalaryDropDown);
router.post("/getEmployeeStatusDropDown", controller.getEmployeeStatusDropDown);
router.post("/getSocialSecurityDropDown", controller.getSocialSecurityDropDown);
router.post(
  "/getEmergencyContactDropDown",
  controller.getEmergencyContactDropDown
);
router.post("/getWelfareDropDown", controller.getWelfareDropDown);
router.post("/getBankDropDown", controller.getBankDropDown);
//#region EDUCATION
router.post(
  "/Info/Education/getEducationTableList",
  controller.getEducationTableList
);
router.post(
  "/Info/Education/getProvinceDropDown",
  controller.getProvinceDropdown
);
router.post(
  "/Info/Education/getCountryDropDown",
  controller.getCountryDropdown
);
router.post(
  "/Info/Education/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/Education/createEducationTable",
  controller.createEducationTable
);
router.post(
  "/Info/Education/getEducationTableById",
  controller.getEducationTableById
);
router.post(
  "/Info/Education/editEducationTable",
  controller.editEducationTable
);
router.post(
  "/Info/Education/deleteEducationTable",
  controller.deleteEducationTable
);
//#endregion
//#region  AssessmentTrans

router.post(
  "/Info/AssessmentTrans/getAssessmentTransTypeDropDown",
  controller.getAssessmentTransTypeDropDown
);
router.post(
  "/Info/AssessmentTrans/getAssessmentTransCode",
  controller.getAssessmentTransCode
);
router.post(
  "/Info/AssessmentTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/AssessmentTrans/editAssessmentTransTable",
  controller.editAssessmentTransTable
);
router.post(
  "/Info/AssessmentTrans/getAssessmentTransTableList",
  controller.getAssessmentTransTableList
);
router.post(
  "/Info/AssessmentTrans/createAssessmentTransTable",
  controller.createAssessmentTransTable
);

router.post(
  "/Info/AssessmentTrans/getAssessmentTransTableById",
  controller.getAssessmentTransTableById
);
router.post(
  "/Info/AssessmentTrans/deleteAssessmentTransTable",
  controller.deleteAssessmentTransTable
);
//#endregion

//#region attachment
router.post(
  "/Info/Attachment/getAttachmentTableList",
  controller.getAttachmentTableList
);
router.post(
  "/Info/Attachment/getAttachmentTableById",
  controller.getAttachmentTableById
);
router.post(
  "/Info/Attachment/createAttachmentTable",
  controller.createAttachmentTable
);
router.post(
  "/Info/Attachment/editAttachmentTable",
  controller.editAttachmentTable
);
router.post(
  "/Info/Attachment/deleteAttachmentTable",
  controller.deleteAttachmentTable
);
router.post(
  "/Info/Attachment/getInitialDataAttachment",
  controller.getInitialDataAttachment
);

//#endregion
//#region  Timeticket
router.post(
  "/Info/Timeticket/getTimeticketTableList",
  controller.getTimeticketTableList
);
router.post(
  "/Info/Timeticket/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/Timeticket/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/Timeticket/getPositionDropDown",
  controller.getPositionDropdrown
);
router.post(
  "/Info/Timeticket/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Info/Timeticket/getWorktimetypeDropDown",
  controller.getWorktimetypeDropDown
);

router.post(
  "/Info/Timeticket/getTimeticketTableById",
  controller.getTimeticketTableById
);

router.post(
  "/Info/Timeticket/createTimeticketTable",
  controller.createTimeticketTable
);
router.post(
  "/Info/Timeticket/editTimeticketTable",
  controller.editTimeticketTable
);

router.post(
  "/Info/Timeticket/deleteTimeticketTable",
  controller.deleteTimeticketTable
);
router.post(
  "/Info/Timeticket/getInitialDataTimeticket",
  controller.getInitialDataTimeticket
);
//#endregion

//#region ONSITE
router.post("/Info/Onsite/getOnsiteTableList", controller.getOnsiteTableList);
router.post("/Info/Onsite/createOnsiteTable", controller.createOnsiteTable);
router.post("/Info/Onsite/getOnsiteTableById", controller.getOnsiteTableById);
router.post(
  "/Info/Onsite/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post("/Info/Onsite/getEmployeeDropDown", controller.getEmployeeDropDown);

router.post("/Info/Onsite/editOnsiteTable", controller.editOnsiteTable);

router.post("/Info/Onsite/deleteOnsiteTable", controller.deleteOnsiteTable);
router.post("/Info/Onsite/getInitialData", controller.getInitialDataOnsite);

//#endregion
//#region training_trans
router.post(
  "/Info/TrainingTrans/getTrainingTransTableList",
  controller.getTrainingTransTableList
);
router.post(
  "/Info/TrainingTrans/getTrainingTransTableById",
  controller.getTrainingTransTableById
);
router.post(
  "/Info/TrainingTrans/createTrainingTransTable",
  controller.createTrainingTransTable
);
router.post(
  "/Info/TrainingTrans/editTrainingTransTable",
  controller.editTrainingTransTable
);
router.post(
  "/Info/TrainingTrans/deleteTrainingTransTable",
  controller.deleteTrainingTransTable
);
router.post(
  "/Info/TrainingTrans/getTrainingTransDetailDropDown",
  controller.getTrainingTransDetailDropdown
);
router.post(
  "/Info/TrainingTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/TrainingTrans/getInitialData",
  controller.getInitialDataTrainingTrans
);
//#endregion

//#region  warning trans

router.post(
  "/Info/WarningTrans/getWarningTransTableList",
  controller.getWarningTransTableList
);
router.post(
  "/Info/WarningTrans/getWarningTransTableById",
  controller.getWarningTransTableById
);
router.post(
  "/Info/WarningTrans/createWarningTransTable",
  controller.createWarningTransTable
);
router.post(
  "/Info/WarningTrans/editWarningTransTable",
  controller.editWarningTransTable
);
router.post(
  "/Info/WarningTrans/deleteWarningTransTable",
  controller.deleteWarningTransTable
);
router.post(
  "/Info/WarningTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/WarningTrans/getInitialData",
  controller.getInitialDataWarningTrans
);
//#endregion

//#region certificate_trans
router.post(
  "/Info/CertificateTrans/getCertificateTransTableList",
  controller.getCertificateTransTableList
);
router.post(
  "/Info/CertificateTrans/getCertificateTransTableById",
  controller.getCertificateTransTableById
);
router.post(
  "/Info/CertificateTrans/createCertificateTransTable",
  controller.createCertificateTransTable
);
router.post(
  "/Info/CertificateTrans/editCertificateTransTable",
  controller.editCertificateTransTable
);
router.post(
  "/Info/CertificateTrans/deleteCertificateTransTable",
  controller.deleteCertificateTransTable
);
router.post(
  "/Info/CertificateTrans/getCertificateTypeDropDown",
  controller.getCertificateTpyeDropdown
);
router.post(
  "/Info/CertificateTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/CertificateTrans/getSalaryDropDown",
  controller.getSalaryDropdown
);
router.post(
  "/Info/CertificateTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/CertificateTrans/getInitialData",
  controller.getInitialDataCertificateTrans
);
//#endregion
//#region leave_trans
router.post(
  "/Info/LeaveTrans/getLeaveTransTableList",
  controller.getLeaveTransTableList
);
router.post(
  "/Info/LeaveTrans/getLeaveTransTableById",
  controller.getLeaveTransTableById
);
router.post(
  "/Info/LeaveTrans/createLeaveTransTable",
  controller.createLeaveTransTable
);
router.post(
  "/Info/LeaveTrans/editLeaveTransTable",
  controller.editLeaveTransTable
);
router.post(
  "/Info/LeaveTrans/deleteLeaveTransTable",
  controller.deleteLeaveTransTable
);
router.post(
  "/Info/LeaveTrans/getLeaveTransTypeDropDown",
  controller.getLeaveTransTypeDropdown
);
router.post(
  "/Info/LeaveTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/LeaveTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region reponsibilitydevice
router.post(
  "/Info/ResponsibilityDevice/getResponsibilityDeviceTableList",
  controller.getResponsibilityDeviceTableList
);
router.post(
  "/Info/ResponsibilityDevice/getResponsibilityDeviceTableById",
  controller.getResponsibilityDeviceTableById
);
router.post(
  "/Info/ResponsibilityDevice/createResponsibilityDeviceTable",
  controller.createResponsibilityDeviceTable
);
router.post(
  "/Info/ResponsibilityDevice/editResponsibilityDeviceTable",
  controller.editResponsibilityDeviceTable
);
router.post(
  "/Info/ResponsibilityDevice/deleteResponsibilityDeviceTable",
  controller.deleteResponsibilityDeviceTable
);
router.post(
  "/Info/ResponsibilityDevice/GetAssetsDropdown",
  controller.getAssetsDropdown
);
router.post(
  "/Info/ResponsibilityDevice/GetEmployeeDropdown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/ResponsibilityDevice/GetDocumentStatusDropdown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Info/ResponsibilityDevice/getInitialData",
  controller.getInitialDataResponsibilityDevice
);
//#endregion
//#region Welfare detail
router.post(
  "/Info/WelfareDetail/getWelfareDetailTableList",
  controller.getWelfareDetailTableList
);
router.post(
  "/Info/WelfareDetail/getWelfareDetailTableById",
  controller.getWelfareDetailTableById
);
router.post(
  "/Info/WelfareDetail/createWelfareDetailTable",
  controller.createWelfareDetailTable
);
router.post(
  "/Info/WelfareDetail/editWelfareDetailTable",
  controller.editWelfareDetailTable
);
router.post(
  "/Info/WelfareDetail/deleteWelfareDetailTable",
  controller.deleteWelfareDetailTable
);

router.post(
  "/Info/WelfareDetail/getWelfareUUIDByEmployeeTable",
  controller.getWelfareUUIDByEmployeeTable
);

router.post(
  "/Info/WelfareDetail/getWelfareDropDown",
  controller.getWelfareDropDown
);
//#endregion

//#region salarytrans

router.post(
  "/Info/SalaryTrans/getSalaryTransTableList",
  controller.getSalaryTransTableList
);
router.post(
  "/Info/SalaryTrans/getSalaryTransTableById",
  controller.getSalaryTransTableById
);

router.post(
  "/Info/SalaryTrans/createSalaryTransTable",
  controller.createSalaryTransTable
);
router.post(
  "/Info/SalaryTrans/editSalaryTransTable",
  controller.editSalaryTransTable
);
router.post(
  "/Info/SalaryTrans/deleteSalaryTransTable",
  controller.deleteSalaryTransTable
);
router.post(
  "/Info/SalaryTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/SalaryTrans/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Info/SalaryTrans/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/SalaryTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/SalaryTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region Address
router.post(
  "/Info/Address/getAddressTableList",
  controller.getAddressTableList
);
router.post("/Info/Address/getCountryDropDown", controller.getCountryDropdown);
router.post(
  "/Info/Address/getProvinceDropDown",
  controller.getProvinceDropdown
);
router.post(
  "/Info/Address/getDistrictDropDown",
  controller.getDistrictDropdown
);
router.post(
  "/Info/Address/getSubDistrictDropDown",
  controller.getSubDistrictDropdown
);
router.post("/Info/Address/createAddressTable", controller.createAddressTable);
router.post(
  "/Info/Address/getInitialDataAddressTable",
  controller.getInitialDataAddressTable
);
router.post(
  "/Info/Address/getAddressTableById",
  controller.getAddressTableById
);
router.post("/Info/Address/editAddressTable", controller.editAddressTable);
router.post("/Info/Address/deleteAddressTable", controller.deleteAddressTable);

//#endregion
//#region ContactTable
router.post(
  "/Info/Contact/getContactTableList",
  controller.getContactTableList
);
router.post("/Info/Contact/createContactTable", controller.createContactTable);
router.post(
  "/Info/Contact/getContactTableById",
  controller.getContactTableById
);
router.post("/Info/Contact/editContactTable", controller.editContactTable);
router.post("/Info/Contact/deleteContactTable", controller.deleteContactTable);
router.post(
  "/Info/Contact/getInitialDataContactTable",
  controller.getInitialDataContactTable
);
//#endregion
//#region position training_trans
router.post(
  "/Info/PositionTrans/getPositionTransTableList",
  controller.getPositionTransTableList
);
router.post(
  "/Info/PositionTrans/getPositionTransTableById",
  controller.getPositionTransTableById
);
router.post(
  "/Info/PositionTrans/createPositionTransTable",
  controller.createPositionTransTable
);
router.post(
  "/Info/PositionTrans/editPositionTransTable",
  controller.editPositionTransTable
);
router.post("/deletePositionTransTable", controller.deletePositionTransTable);
router.post(
  "/Info/PositionTrans/GetEmployeeDropdown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/PositionTrans/GetDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/PositionTrans/GetPositionDropdown",
  controller.getPositionDropdown
);
router.post(
  "/Info/PositionTrans/deletePositionTransTable",
  controller.deletePositionTransTable
);
router.post(
  "/Info/PositionTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region action salary
router.post(
  "/Action/AdjustPosition/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustPosition/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustPosition/editAdjustPosition",
  controller.adjustPosition
);
router.post(
  "/Action/AdjustPosition/postStatusAdjustPosition",
  controller.postStatusAdjustPosition
);

router.post(
  "/Action/AdjustPosition/getAdjustPositionById",
  controller.getAdjustPositionById
);
router.post(
  "/Action/AdjustPosition/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustPosition/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustPosition/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustSalary/getInitialAdjustSalary",
  controller.getInitialAdjustSalary
);
router.post(
  "/Action/AdjustSalary/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustSalary/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustSalary/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustSalary/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustSalary/editAdjustSalaryTable",
  controller.editAdjustSalaryTable
);
router.post(
  "/Action/AdjustPosition/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustSalary/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustPosition/getFielChangeDropdown",
  controller.getFielChangeDropdown
);
//#endregion

//#region action resign
router.post(
  "/Action/AdjustResign/getEmployeeDropDown",
  controller.getEmployeeDropDown
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
  "/Action/AdjustResign/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustResign/getAdjustResignInitialData",
  controller.getAdjustResignInitialData
);
router.post(
  "/Action/AdjustResign/getAdjustResignInitialPostStatusData",
  controller.getAdjustResignInitialPostStatusData
);
router.post(
  "/Action/AdjustResign/createResignTable",
  controller.createResignTable
);
router.post(
  "/Action/AdjustResign/editEmployeeStatusResignTable",
  controller.editEmployeeStatusResignTable
);
router.post(
  "/Action/AdjustResign/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post("/Action/AdjustResign/postResign", controller.postResign);
//#endregion

//#region transfer transfer
router.post(
  "/Info/TransferTrans/getTransferTransTableList",
  controller.getTransferTransTableList
);
router.post(
  "/Info/TransferTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/TransferTrans/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/TransferTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/TransferTrans/getTransferTransTableById",
  controller.getTransferTransTableById
);
router.post(
  "/Info/TransferTrans/editTransferTransTable",
  controller.editTransferTransTable
);
router.post(
  "/Info/TransferTrans/deleteTransferTransTable",
  controller.deleteTransferTransTable
);
router.post(
  "/Info/TransferTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/TransferTrans/getInitialDataAdjustTransfer",
  controller.getInitialDataAdjustTransfer
);
router.post(
  "/Action/TransferTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/TransferTrans/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/TransferTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/TransferTrans/editAdjustTransfer",
  controller.editAdjustTransfer
);
router.post(
  "/Action/TransferTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region probation
router.post(
  "/Info/ProbationTrans/getProbationTransTableList",
  controller.getProbationTransTableList
);
router.post(
  "/Action/ProbationTrans/deleteProbationTransTable",
  controller.deleteProbationTransTable
);
router.post(
  "/Info/ProbationTrans/getProbationTransTableById",
  controller.getProbationTransTableById
);
router.post(
  "/Info/ProbationTrans/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/ProbationTrans/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/ProbationTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/ProbationTrans/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Info/ProbationTrans/editProbationTransTable",
  controller.editProbationTransTable
);
router.post(
  "/Info/ProbationTrans/deleteProbationTransTable",
  controller.deleteProbationTransTable
);
router.post(
  "/Info/ProbationTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/AdjustProbation/getInitialDataAdjustProbation",
  controller.getInitialDataAdjustProbation
);
router.post(
  "/Action/AdjustProbation/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Action/AdjustProbation/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustProbation/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustProbation/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustProbation/editAdjustProbation",
  controller.editAdjustProbation
);
router.post(
  "/Action/AdjustProbation/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
//#endregion
//#region resign_trans
router.post(
  "/Info/ResignTrans/getResignTableList",
  controller.getResignTableList
);
router.post(
  "/Info/ResignTrans/getResignTableById",
  controller.getResignTableById
);
router.post(
  "/Info/ResignTrans/createResignTable",
  controller.createResignTable
);
router.post("/Info/ResignTrans/editResignTable", controller.editResignTable);
router.post(
  "/Info/ResignTrans/deleteResignTable",
  controller.deleteResignTable
);
router.post(
  "/Info/ResignTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/ResignTrans/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Info/ResignTrans/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/ResignTrans/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/ResignTrans/getSalaryDropDown",
  controller.getSalaryDropDown
);
//#end resign
// resign status employee
router.post(
  "/Action/AdjustBackToWork/getAdjustBacktoworkInitialData",
  controller.getAdjustBacktoworkInitialData
);
router.post(
  "/Action/AdjustBackToWork/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustBackToWork/getEmployeeTableById",
  controller.getEmployeeTableById
);
router.post(
  "/Action/AdjustBackToWork/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/AdjustBackToWork/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Action/AdjustBackToWork/getSalaryDropDown",
  controller.getSalaryDropDown
);
router.post(
  "/Action/AdjustBackToWork/getEmployeeStatusDropDown",
  controller.getEmployeeStatusDropDown
);
router.post(
  "/Action/AdjustBackToWork/createResignTable",
  controller.createBacktoworkTable
);
router.post(
  "/Action/AdjustBackToWork/editEmployeeStatusBacktoworkTable",
  controller.editEmployeeStatusBacktoworkTable
);
//end
//#region EmergencyContactTable
router.post(
  "/Info/EmergencyContact/getEmergencyContactTableList",
  controller.getEmergencyContactTableList
);
router.post(
  "/Info/EmergencyContact/createEmergencyContactTable",
  controller.createEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/getEmergencyContactTableById",
  controller.getEmergencyContactTableById
);
router.post(
  "/Info/EmergencyContact/editEmergencyContactTable",
  controller.editEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/deleteEmergencyContactTable",
  controller.deleteEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/getInitialDataEmergencyContactTable",
  controller.getInitialDataEmergencyContactTable
);
router.post(
  "/Info/EmergencyContact/getAddressDropDown",
  controller.getAddressDropDown
);
router.post(
  "/Info/EmergencyContact/getCountryDropDown",
  controller.getCountryDropdown
);
router.post(
  "/Info/EmergencyContact/getProvinceDropDown",
  controller.getProvinceDropdown
);
router.post(
  "/Info/EmergencyContact/getDistrictDropDown",
  controller.getDistrictDropdown
);
router.post(
  "/Info/EmergencyContact/getSubDistrictDropDown",
  controller.getSubDistrictDropdown
);
//#endregion
router.post("/Info/LeaveTrans/getInitialData", controller.getInitialData);
// AdjustLeaveTrans
router.post(
  "/Action/AdjustLeaveTrans/getEmployeeTableList",
  controller.getEmployeeTableList
);
router.post(
  "/Action/AdjustLeaveTrans/getAdjustLeaveTransInitialPostStatusData",
  controller.getAdjustLeaveTransInitialPostStatusData
);
router.post(
  "/Action/AdjustLeaveTrans/createLeaveTransTable",
  controller.createLeaveTransTable
);
// router.post(
//   "/Action/AdjustLeaveTrans/editAdjustLeaveTransPostStatus",
//    controller.editAdjustLeaveTransPostStatus
// );
// router.post(
//   "/Action/AdjustLeaveTrans/editAdjustLeaveTransStatus",
//    controller.editAdjustLeaveTransStatus
// );
router.post("/Info/LeaveTrans/getInitialData", controller.getInitialData);

router.post("/getDayEmpcode", controller.getDayEmpcode);
router.post("/getMonthEmpcode", controller.getMonthEmpcode);

//#region timeticket
router.post(
  "/Info/Timeticket/getTimeticketInitialData",
  controller.getTimeticketInitialData
);

//#endregion

//#region overtime
router.post(
  "/Info/Overtime/getOvertimeInitialData",
  controller.getOvertimeInitialData
);

router.post(
  "/Info/Overtime/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/Overtime/getDepartmentDropDown",
  controller.getDepartmentDropdown
);
router.post(
  "/Info/Overtime/getPositionDropDown",
  controller.getPositionDropdown
);
router.post(
  "/Info/Overtime/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Info/Overtime/createOvertimeTable",
  controller.createOvertimeTable
);
router.post(
  "/Info/Overtime/getOvertimeTableList",
  controller.getOvertimeTableList
);
router.post(
  "/Info/Overtime/getOvertimeTableById",
  controller.getOvertimeTableById
);
router.post("/Info/Overtime/editOvertimeTable", controller.editOvertimeTable);
router.post(
  "/Info/Overtime/deleteOvertimeTable",
  controller.deleteOvertimeTable
);

//#endregion

//#region  Post Button
router.post(
  "/Action/AdjustProbation/postStatusAdjustProbation",
  controller.postStatusAdjustProbation
);
router.post(
  "/Action/AdjustSalary/postStatusAdjustSalary",
  controller.postStatusAdjustSalary
);
router.post(
  "/Action/TransferTrans/postStatusAdjustTransfer",
  controller.postStatusAdjustTransfer
);
router.post(
  "/Info/Overtime/postStatusReqestOvertime",
  controller.postStatusReqestOvertime
);

router.post(
  "/Info/LeaveTrans/postStatusLeaveTrans",
  controller.postStatusLeaveTrans
);
// ToDoList
router.post("/getToDoListByEmployeeId", controller.getToDoListByEmployeeId);

//#endregion

// Jop trans
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
//#endregion
//# print document
router.post(
  "/Action/printdocument/getDocmuentTemplate",
  controller.getDocmuentTemplate
);
router.post(
  "/Action/printdocument/postPrintDocument",
  controller.printDocumentTemplate
);
//#endregion
//#region workexperience
router.post(
  "/Info/WorkExperience/getWorkExperienceTableList",
  controller.getWorkExperienceTableList
);
router.post(
  "/Info/WorkExperience/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/WorkExperience/getInitialData",
  controller.getInitialDataOfWorkExperience
);

router.post(
  "/Info/WorkExperience/createWorkExperienceTable",
  controller.createWorkExperienceTable
);
router.post(
  "/Info/WorkExperience/getWorkExperienceTableById",
  controller.getWorkExperienceTableById
);
router.post(
  "/Info/WorkExperience/editWorkExperienceTable",
  controller.editWorkExperienceTable
);
router.post(
  "/Info/WorkExperience/deleteWorkExperienceTable",
  controller.deleteWorkExperienceTable
);
//#endregion
//#region relative
router.post("/Info/Relative/createRelative", controller.createRelative);
router.post(
  "/Info/Relative/getRelativeTableList",
  controller.getRelativeTableList
);
router.post("/Info/Relative/editRelativeTable", controller.editRelativeTable);
router.post(
  "/Info/Relative/deleteRelativeTable",
  controller.deleteRelativeTable
);
router.post(
  "/Info/Relative/getRelativeTableById",
  controller.getRelativeTableById
);
router.post(
  "/Info/Relative/getRelativeDropdown",
  controller.getRelativeDropdown
);
//#endregion relative

//#region book_bank
router.post(
  "/Info/BookBank/getBookBankTableList",
  controller.getBookBankTableList
);
router.post("/Info/BookBank/getBankDropDown", controller.getBankDropDown);
router.post(
  "/Info/BookBank/getEmployeeDropDown",
  controller.getEmployeeDropDown
);
router.post(
  "/Info/BookBank/getinitialdata",
  controller.getinitialdataOfBookBank
);
router.post(
  "/Info/BookBank/createBookBankTable",
  controller.createBookBankTable
);
router.post(
  "/Info/BookBank/getBookBankTableById",
  controller.getBookBankTableById
);
router.post("/Info/BookBank/editBookBankTable", controller.editBookBankTable);
router.post(
  "/Info/BookBank/deleteBookBankTable",
  controller.deleteBookBankTable
);
//#endregion

//#region TransferTrans getFielChangeDropdown
router.post(
  "/Info/TransferTrans/getFielChangeDropdown",
  controller.getFielChangeDropdown
);
//#endregion

// Work Time Trans
router.post(
  "/Info/WorktimeTrans/getWorktimeTransTableList",
  controller.getWorktimeTransTableList
);
router.post(
  "/Info/WorktimeTrans/getWorktimeTransTableById",
  controller.getWorktimeTransTableById
);
router.post(
  "/Info/WorktimeTrans/getInitialDataWorktimeTrans",
  controller.getInitialDataWorktimeTrans
);
router.post(
  "/Info/WorktimeTrans/createWorktimeTransTable",
  controller.createWorktimeTransTable
);
router.post(
  "/Info/WorktimeTrans/editWorktimeTransTable",
  controller.editWorktimeTransTable
);
router.post(
  "/Info/WorktimeTrans/deleteWorktimeTransTable",
  controller.deleteWorktimeTransTable
);
router.post(
  "/Info/WorktimeTrans/getWorktimetypeDropDown",
  controller.getWorktimeTypeDropdown
);
router.post(
  "/Info/WorktimeTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
//#endregion relative
//#legalpunishment
router.post(
  "/Info/LegalPunishment/createLegalPunishmentTable",
  controller.createLegalPunishmentTable
);
router.post(
  "/Info/LegalPunishment/getLegalPunishmentTableList",
  controller.getLegalPunishmentTableList
);
router.post(
  "/Info/LegalPunishment/editLegalPunishmentTable",
  controller.editLegalPunishmentTable
);
router.post(
  "/Info/LegalPunishment/deleteLegalPunishmentTable",
  controller.deleteLegalPunishmentTable
);
router.post(
  "/Info/LegalPunishment/getLegalPunishmentTableById",
  controller.getLegalPunishmentTableById
);
router.post(
  "/Info/LegalPunishment/getLegalPunishmentDropdown",
  controller.getLegalPunishmentDropdown
);
//#end legalpunishment
//PUNISHMENT_TRANS_INFO
router.post(
  "/Info/PunishmentTrans/getPunishmentTransTableList",
  controller.getPunishmentTransTableList
);
router.post(
  "/Info/PunishmentTrans/getPunishmentTransTableById",
  controller.getPunishmentTransTableById
);
router.post(
  "/Info/PunishmentTrans/createPunishmentTransTable",
  controller.createPunishmentTransTable
);
router.post(
  "/Info/PunishmentTrans/editPunishmentTransTable",
  controller.editPunishmentTransTable
);
router.post(
  "/Info/PunishmentTrans/deletePunishmentTransTable",
  controller.deletePunishmentTransTable
);
router.post(
  "/Info/PunishmentTrans/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Info/PunishmentTrans/getPunishmentTypeDropDown",
  controller.getPunishmentTypeDropdown
);
router.post(
  "/Info/PunishmentTrans/getPunishmentTypeByCode",
  controller.getPunishmentTypeByCode
);
router.post("/getEmployeeDropDown", controller.getEmployeeDropDown);
//#end legalpunishment
module.exports = router;
