const employeeService = require("../services/employee_service");
const positionService = require("../services/position_service");
const respons = require("../shared/tools/respons_handler");
const departmentService = require("../services/department_service");
const countryService = require("../services/country_service");
const provinceService = require("../services/province_service");
const districtService = require("../services/district_service");
const subDistrictService = require("../services/sub_district_service");
const nattionalityService = require("../services/nationality_service");
const contactService = require("../services/contact_service");
const joblevelService = require("../services/job_level_services");
const educationService = require("../services/education_service");
const assessmentTransService = require("../services/assessment_trans_service");
const salaryService = require("../services/salary_service");
const employee_status_service = require("../services/employee_status_service");
const attachmentService = require("../services/attachment_service");
const assessment_trans_type_service = require("../services/assessment_trans_type_service");
const timeticket_service = require("../services/timeticket_service");
const worktimetype_service = require("../services/worktime_type_service");
const onsite_service = require("../services/onsite_service");
const documentstatus_service = require("../services/document_status_service");
const warningtrans_service = require("../services/warning_trans_service");
const welfare_service = require("../services/welfare_service");
const certificate_transService = require("../services/certificate_trans_service");
const certificateTpyeService = require("../services/certificate_type_service");
const leave_transService = require("../services/leave_trans_service");
const leaveTransTypeService = require("../services/leave_trans_type_service");
const welfare_detail_service = require("../services/welfare_detail_service");
const training_transService = require("../services/training_trans_service");
const trainingTransDetailService = require("../services/training_trans_detail_service");
const assetService = require("../services/assets_service");
const responsibilityDeviceService = require("../services/responsibility_device_service");
const salarytransService = require("../services/salary_trans_service");
const emergencyContactService = require("../services/emergency_contact_service");
const addressService = require("../services/address_service");
const timeticketService = require("../services/timeticket_service");
const positionTransService = require("../services/position_trans_service");
const adjustPositionService = require("../services/adjust_position_service");
const resignService = require("../services/resign_service");
const TransferTransService = require("../services/transfer_trans_service");
const ProbationTransService = require("../services/probation_trans_service");
const backtoworkService = require("../services/backtowork_service");
const EmergencyContactService = require("../services/emergency_contact_service");
const leaveTransService = require("../services/leave_trans_service");
const overtimeService = require("../services/overtime_service");
const jobTransService = require("../services/job_trans_service");
const jobService = require("../services/job_service");
const workExperienceService = require("../services/work_experiencen_service");
const bookmarkdocumenttemplateService = require("../services/bookmarkdocument_template_service");
const relative = require("../services/relative_service");
const bookbankService = require("../services/book_bank_service");
const bankService = require("../services/bank_service");
const worktime_transService = require("../services/worktime_trans_service");
const worktime_type_service = require("../services/worktime_type_service");
const punishment_transService = require("../services/punishment_trans_service");
const punishmentTypeService = require("../services/punishment_type_service");
const social_security_service = require("../services/social_security_service");

const legalpunishment = require("../services/legal_punishment_service");
let createEmployeeTable = async (req, res) => {
  try {
    res.status(200).json(await employeeService.createEmployeeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEmployeeTableList = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getEmployeeTableListByResign = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.getEmployeeTableListByResign(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let editEmployeeTable = async (req, res) => {
  try {
    res.status(200).json(await employeeService.editEmployeeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEmployeeTable = async (req, res) => {
  try {
    res.status(200).json(await employeeService.deleteEmployeeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEmployeeTableById = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

//#region Dropdown

let getSalaryDropDown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getPositionDropdrown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getDepartmentDropdown = async (req, res) => {
  try {
    res.status(200).json(await departmentService.getDepartmentDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getCountryDropdown = async (req, res) => {
  try {
    res.status(200).json(await countryService.getCountryDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProvinceDropdown = async (req, res) => {
  try {
    res.status(200).json(await provinceService.getProvinceDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getDistrictDropdown = async (req, res) => {
  try {
    res.status(200).json(await districtService.getDistrictDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getSubDistrictDropdown = async (req, res) => {
  try {
    res.status(200).json(await subDistrictService.getSubDistrictDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getNationalityDropDown = async (req, res) => {
  try {
    res.status(200).json(await nattionalityService.getNationalityDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getContactDropDown = async (req, res) => {
  try {
    res.status(200).json(await contactService.getContactDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getJobLevelDropdown = async (req, res) => {
  try {
    res.status(200).json(await joblevelService.getJobLevelDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmployeeDropDown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getWorktimetypeDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktimetype_service.getWorktimetypeDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getEmployeeStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employee_status_service.getEmployeeStatusDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getSocialSecurityDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await social_security_service.getSocialSecurityDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getAssessmentTransTypeDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await assessment_trans_type_service.getAssessmentTransTypeDropdown(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getDocumentStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await documentstatus_service.getDocumentStatusDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getWelfareDropDown = async (req, res) => {
  try {
    res.status(200).json(await welfare_service.getWelfareDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getAssetsDropdown = async (req, res) => {
  try {
    res.status(200).json(await assetService.getAssetsDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getEmergencyContactDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await emergencyContactService.getEmergencyContactDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getAddressDropDown = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressDropdown(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

//#endregion
//#region EducationTable

let createEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.createEducationTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getEducationTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await educationService.getEducationTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.editEducationTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteEducationTable = async (req, res) => {
  try {
    res.status(200).json(await educationService.deleteEducationTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getEducationTableById = async (req, res) => {
  try {
    res.status(200).json(await educationService.getEducationTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#endregion

//#region AssessmentTransTable
let createAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.createAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAssessmentTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.getAssessmentTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.editAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};

let deleteAssessmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.deleteAssessmentTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAssessmentTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.getAssessmentTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getAssessmentTransCode = async (req, res) => {
  try {
    res
      .status(200)
      .json(await assessmentTransService.getAssessmentTransCode(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#endregion

//#region TimeticketTable
let createTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticket_service.createTimeticketTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTimeticketTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticket_service.getTimeticketTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticket_service.editTimeticketTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};

let deleteTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticket_service.deleteTimeticketTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTimeticketTableById = async (req, res) => {
  try {
    res.status(200).json(await timeticket_service.getTimeticketTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataTimeticket = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getInitialDataTimeticket(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#endregion

//#region training_trans
let getTrainingTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.getTrainingTransTableList(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getTrainingTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.getTrainingTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataTrainingTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.getInitialDataTrainingTrans(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.editTrainingTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.deleteTrainingTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let createTrainingTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await training_transService.createTrainingTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const getTrainingTransDetailDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await trainingTransDetailService.getTrainingTransDetailDropdown(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion
//#region  Onsite
let getOnsiteTableList = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.getOnsiteTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.createOnsiteTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getOnsiteTableById = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.getOnsiteTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.editOnsiteTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let deleteOnsiteTable = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.deleteOnsiteTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataOnsite = async (req, res) => {
  try {
    res.status(200).json(await onsite_service.getInitialDataOnsite(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion

//#region  warning WarningTrans
let getWarningTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.getWarningTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let deleteWarningTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.deleteWarningTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWarningTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.editWarningTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createWarningTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.createWarningTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataWarningTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.getInitialDataWarningTrans(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getWarningTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await warningtrans_service.getWarningTransTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion

//#region responsivedevice
let getResponsibilityDeviceTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.getResponsibilityDeviceTableList(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion
//#region  Welfare detail
let deleteWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detail_service.deleteWelfareDetailTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getResponsibilityDeviceTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.getResponsibilityDeviceTableById(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let editWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detail_service.editWelfareDetailTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createResponsibilityDeviceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.createResponsibilityDeviceTable(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataResponsibilityDevice = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.getInitialDataResponsibilityDevice(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createWelfareDetailTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detail_service.createWelfareDetailTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion
//#region attachment
let createAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.createAttachmentTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
//#endregion
//#region leave_trans
let createLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.createLeaveTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
//#endregion
//#region certificate_trans
let createCertificateTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_transService.createCertificateTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAttachmentTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await attachmentService.getAttachmentTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getCertificateTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await certificate_transService.getCertificateTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editResponsibilityDeviceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.editResponsibilityDeviceTable(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let getWelfareDetailTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detail_service.getWelfareDetailTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let getWelfareDetailTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await welfare_detail_service.getWelfareDetailTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let getWelfareUUIDByEmployeeTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await welfare_detail_service.getWelfareUUIDByEmployeeTable(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getLeaveTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leave_transService.getLeaveTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let deleteResponsibilityDeviceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await responsibilityDeviceService.deleteResponsibilityDeviceTable(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.editAttachmentTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAttachmentTable = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.deleteAttachmentTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAttachmentTableById = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.getAttachmentTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getInitialDataAttachment = async (req, res) => {
  try {
    res.status(200).json(await attachmentService.getInitialDataAttachment(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editCertificateTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_transService.editCertificateTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let editLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.editLeaveTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCertificateTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_transService.deleteCertificateTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let deleteLeaveTransTable = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.deleteLeaveTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCertificateTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificate_transService.getCertificateTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getLeaveTransTableById = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.getLeaveTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getCertificateTpyeDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await certificateTpyeService.getCertificateTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSalaryDropdown = async (req, res) => {
  try {
    res.status(200).json(await salaryService.getSalaryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getLeaveTransTypeDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leaveTransTypeService.getLeaveTransTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion
//#region Address

let getAddressTableList = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion
//#region  positiontrans
let getPositionTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionTransService.getPositionTransTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.createAddressTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createPositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionTransService.createPositionTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.getInitialDataAddressTable(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getAddressTableById = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.editAddressTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAddressTable = async (req, res) => {
  try {
    res.status(200).json(await addressService.deleteAddressTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};

let getDocumentStatusDropDownByAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await documentstatus_service.getDocumentStatusDropDownByAdjustPosition(
          req
        )
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
//#endregion
//#region ContactTable
let getContactTableList = async (req, res) => {
  try {
    res.status(200).json(await contactService.getContactTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionTransService.editPositionTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.createContactTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getPositionTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionTransService.getPositionTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.editContactTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};

let getContactTableById = async (req, res) => {
  try {
    res.status(200).json(await contactService.getContactTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let deleteContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.deleteContactTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getInitialDataContactTable = async (req, res) => {
  try {
    res.status(200).json(await contactService.getInitialDataContactTable(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let deletePositionTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await positionTransService.deletePositionTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion

//#region salarytrans
const deleteSalaryTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salarytransService.deleteSalaryTransTable(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getSalaryTransTableById = async (req, res) => {
  try {
    res.status(200).json(await salarytransService.getSalaryTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

let getSalaryTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salarytransService.getSalaryTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSalaryTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salarytransService.editSalaryTransTable(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let createSalaryTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salarytransService.createSalaryTransTable(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
//#endregion
//#region adjust

let adjustPosition = async (req, res) => {
  try {
    res.status(200).json(await employeeService.adjustPosition(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getAdjustPositionById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await adjustPositionService.getAdjustPositionById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialAdjustSalary = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.getInitialAdjustSalary(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let editAdjustSalaryTable = async (req, res) => {
  try {
    res.status(200).json(await employeeService.editAdjustSalaryTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let postStatusAdjustPosition = async (req, res) => {
  try {
    res
      .status(200)
      .json(await adjustPositionService.postStatusAdjustPosition(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion

const getAdjustResignInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.getAdjustResignInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustResignInitialPostStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await employeeService.getAdjustResignInitialPostStatusData(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let createResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.createResignTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let editEmployeeStatusResignTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.editEmployeeStatusResignTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let postResign = async (req, res) => {
  try {
    res.status(200).json(await employeeService.postResign(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
//#region transfer trans
let getTransferTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.getTransferTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getTransferTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.getTransferTransTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTransferTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.editTransferTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const deleteTransferTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.deleteTransferTransTable(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#region action
let getInitialDataAdjustTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.getInitialDataAdjustTransfer(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAdjustTransfer = async (req, res) => {
  try {
    res.status(200).json(await employeeService.editAdjustTransfer(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion
//#endregion

//#region probation
let getProbationTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProbationTransService.getProbationTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const deleteProbationTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProbationTransService.deleteProbationTransTable(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getProbationTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProbationTransService.getProbationTransTableById(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editProbationTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProbationTransService.editProbationTransTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#region action
let getInitialDataAdjustProbation = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.getInitialDataAdjustProbation(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAdjustProbation = async (req, res) => {
  try {
    res.status(200).json(await employeeService.editAdjustProbation(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#endregion
//# resign_trans
let getResignTableList = async (req, res) => {
  try {
    res.status(200).json(await resignService.getResignTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getResignTableById = async (req, res) => {
  try {
    res.status(200).json(await resignService.getResignTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.editResignTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteResignTable = async (req, res) => {
  try {
    res.status(200).json(await resignService.deleteResignTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
//#endregion
// resign status employee
const getAdjustBacktoworkInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await resignService.getAdjustBacktoworkInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getAdjustLeaveTransInitialPostStatusData = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await leaveTransService.getAdjustLeaveTransInitialPostStatusData(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const createBacktoworkTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await backtoworkService.createBacktoworkTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//#region ContactTable
let getEmergencyContactTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await EmergencyContactService.getEmergencyContactTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await EmergencyContactService.editEmergencyContactTable(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await EmergencyContactService.createEmergencyContactTable(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let getEmergencyContactTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await EmergencyContactService.getEmergencyContactTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let editEmployeeStatusBacktoworkTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.editEmployeeStatusBacktoworkTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};

let deleteEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await EmergencyContactService.deleteEmergencyContactTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getInitialDataEmergencyContactTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await EmergencyContactService.getInitialDataEmergencyContactTable(req)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getInitialData = async (req, res) => {
  try {
    res.status(200).json(await leave_transService.getInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataCertificateTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await certificate_transService.getInitialDataCertificateTrans(req, res)
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion
const getEmpcode = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmpcode(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getTimeticketInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticketService.getTimeticketInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getMonthEmpcode = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getMonthEmpcode(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getOvertimeInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimeInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const createOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.createOvertimeTable(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};

const getOvertimeTableList = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.getOvertimeTableList(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const getOvertimeTableById = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.getOvertimeTableById(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const editOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.editOvertimeTable(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const deleteOvertimeTable = async (req, res) => {
  try {
    res.status(200).json(await overtimeService.deleteOvertimeTable(req, res));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};

const getOvertimePostInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.getOvertimePostInitialData(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};

const getDayEmpcode = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getDayEmpcode(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let postStatusAdjustTransfer = async (req, res) => {
  try {
    res
      .status(200)
      .json(await TransferTransService.postStatusAdjustTransfer(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let postStatusAdjustSalary = async (req, res) => {
  try {
    res
      .status(200)
      .json(await salarytransService.postStatusAdjustSalary(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let postStatusAdjustProbation = async (req, res) => {
  try {
    res
      .status(200)
      .json(await ProbationTransService.postStatusAdjustProbation(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let postStatusReqestOvertime = async (req, res) => {
  try {
    res
      .status(200)
      .json(await overtimeService.postStatusReqestOvertime(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let postStatusLeaveTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await leaveTransService.postStatusLeaveTrans(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getToDoListByEmployeeId = async (req, res) => {
  try {
    res
      .status(200)
      .json(await employeeService.getToDoListByEmployeeId(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
//JobTrans
let getInitialDataJobTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await jobTransService.getInitialDataJobTrans(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let createJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await jobTransService.createJobTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobTransTableList = async (req, res) => {
  try {
    res.status(200).json(await jobTransService.getJobTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await jobTransService.editJobTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await jobTransService.deleteJobTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobTransTableById = async (req, res) => {
  try {
    res.status(200).json(await jobTransService.getJobTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getJobDropdown = async (req, res) => {
  try {
    res.status(200).json(await jobService.getJobDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getFielChangeDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getFielChangeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocmuentTemplate = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await bookmarkdocumenttemplateService.getBookmarkdocumentTemplateDropdown(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const printDocumentTemplate = async (req, res) => {
  try {
    bookmarkdocumenttemplateService.printDocumentTemplate(req, res);
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//end

//#region work experience

let getWorkExperienceTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await workExperienceService.getWorkExperiencenTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let getInitialDataOfWorkExperience = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await workExperienceService.getInitialDataOfWorkExperience(req, res)
      );
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let createWorkExperienceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await workExperienceService.createWorkExperiencenTable(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWorkExperienceTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await workExperienceService.getWorkExperiencenTableById(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let editWorkExperienceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await workExperienceService.editWorkExperiencenTable(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWorkExperienceTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await workExperienceService.deleteWorkExperiencenTable(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
//#endregion
//#region relative
let createRelative = async (req, res) => {
  try {
    res.status(200).json(await relative.createRelativeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRelativeTableList = async (req, res) => {
  try {
    res.status(200).json(await relative.getRelativeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRelativeTable = async (req, res) => {
  try {
    res.status(200).json(await relative.editRelativeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRelativeTable = async (req, res) => {
  try {
    res.status(200).json(await relative.deleteRelativeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRelativeTableById = async (req, res) => {
  try {
    res.status(200).json(await relative.getRelativeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getRelativeDropdown = async (req, res) => {
  try {
    res.status(200).json(await relative.getRelativeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion relative
//#region book_bank
const getBookBankTableList = async (req, res) => {
  try {
    res.status(200).json(await bookbankService.getBookBankTableList(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getBankDropDown = async (req, res) => {
  try {
    res.status(200).json(await bankService.getBankDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getinitialdataOfBookBank = async (req, res) => {
  try {
    res
      .status(200)
      .json(await bookbankService.getinitialdataOfBookBank(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const createBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await bookbankService.createBookBankTable(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const editBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await bookbankService.editBookBankTable(req, res));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
const getBookBankTableById = async (req, res) => {
  try {
    res.status(200).json(await bookbankService.getBookBankTableById(req, res));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const deleteBookBankTable = async (req, res) => {
  try {
    res.status(200).json(await bookbankService.deleteBookBankTable(req, res));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
//#endregion
// Work Time trans
let createWorktimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.createWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
//#region LegalPunishment
let createLegalPunishmentTable = async (req, res) => {
  try {
    res.status(200).json(await legalpunishment.createLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getWorktimeTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.getWorktimeTransTableList(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLegalPunishmentTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legalpunishment.getLegalPunishmentTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editWorktimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.editWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let editLegalPunishmentTable = async (req, res) => {
  try {
    res.status(200).json(await legalpunishment.editLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteWorktimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.deleteWorktimeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let deleteLegalPunishmentTable = async (req, res) => {
  try {
    res.status(200).json(await legalpunishment.deleteLegalPunishmentTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getWorktimeTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.getWorktimeTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getInitialDataWorktimeTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_transService.getInitialDataWorktimeTrans(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getLegalPunishmentTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legalpunishment.getLegalPunishmentTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getWorktimeTypeDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await worktime_type_service.getWorktimeTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const getLegalPunishmentDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await legalpunishment.getLegalPunishmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion relative
//PUNISHMENT_TRANS_INFO
let createPunishmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_transService.createPunishmentTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPunishmentTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await punishment_transService.getPunishmentTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPunishmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_transService.editPunishmentTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePunishmentTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_transService.deletePunishmentTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPunishmentTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishment_transService.getPunishmentTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let getPunishmentTypeByCode = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishmentTypeService.getPunishmentTypeByCode(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getPunishmentTypeDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await punishmentTypeService.getPunishmentTypeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
//#endregion LegalPunishment
module.exports = {
  getEmployeeStatusDropDown,
  getSocialSecurityDropDown,
  getEmployeeTableList,
  getEmployeeTableListByResign,
  getEmployeeTableById,
  createEmployeeTable,
  editEmployeeTable,
  deleteEmployeeTable,
  getPositionDropdrown,
  getDepartmentDropdown,
  getCountryDropdown,
  getProvinceDropdown,
  getDistrictDropdown,
  getSubDistrictDropdown,
  getNationalityDropDown,
  getContactDropDown,
  getJobLevelDropdown,
  getEmployeeDropDown,
  getSalaryDropDown,
  getAssessmentTransTypeDropDown,
  getAssessmentTransCode,
  getWorktimetypeDropDown,
  getDocumentStatusDropDown,
  getAssetsDropdown,
  getWelfareDropDown,
  getAddressDropDown,
  postResign,
  //#region Education
  getEducationTableList,
  createEducationTable,
  editEducationTable,
  deleteEducationTable,
  getEducationTableById,
  getEmergencyContactDropDown,
  //#endregion
  //#region AssessmentTrans
  getAssessmentTransTableList,
  getAssessmentTransTableById,
  createAssessmentTransTable,
  editAssessmentTransTable,
  deleteAssessmentTransTable,
  //#endregion
  //#region attachment
  getAttachmentTableList,
  getAttachmentTableById,
  createAttachmentTable,
  editAttachmentTable,
  deleteAttachmentTable,
  getInitialDataAttachment,
  //#endregion
  //#region Timeticket
  getInitialDataTimeticket,
  getTimeticketTableList,
  editTimeticketTable,
  getTimeticketTableById,
  deleteTimeticketTable,
  createTimeticketTable,
  //#endregion
  //#region Onsite
  getOnsiteTableList,
  createOnsiteTable,
  getOnsiteTableById,
  editOnsiteTable,
  deleteOnsiteTable,
  getInitialDataOnsite,
  //#endregion
  //#region training_trans
  getTrainingTransTableList,
  getTrainingTransTableById,
  createTrainingTransTable,
  editTrainingTransTable,
  deleteTrainingTransTable,
  getTrainingTransDetailDropdown,
  getEmployeeDropdown,
  getInitialDataTrainingTrans,
  //#endregion
  //#region  WarningTrans
  getWarningTransTableList,
  deleteWarningTransTable,
  editWarningTransTable,
  createWarningTransTable,
  getWarningTransTableById,
  getInitialDataWarningTrans,
  //#endregion
  //#region  responsivedevice
  getResponsibilityDeviceTableList,
  getResponsibilityDeviceTableById,
  createResponsibilityDeviceTable,
  editResponsibilityDeviceTable,
  deleteResponsibilityDeviceTable,
  getInitialDataResponsibilityDevice,
  //#endregion
  //#region Welfare detail

  deleteWelfareDetailTable,
  editWelfareDetailTable,
  createWelfareDetailTable,
  getWelfareDetailTableById,
  getWelfareDetailTableList,

  getWelfareUUIDByEmployeeTable,

  //#endregion
  //#region certificate_trans
  getCertificateTransTableList,
  getCertificateTransTableById,
  createCertificateTransTable,
  editCertificateTransTable,
  deleteCertificateTransTable,
  getCertificateTpyeDropdown,
  getSalaryDropdown,
  getPositionDropdown,
  //#endregion
  //#region leave_trans
  getLeaveTransTableList,
  getLeaveTransTableById,
  createLeaveTransTable,
  editLeaveTransTable,
  deleteLeaveTransTable,
  getLeaveTransTypeDropdown,
  //#endregion
  //#region  salarytrans
  deleteSalaryTransTable,
  editSalaryTransTable,
  createSalaryTransTable,
  getSalaryTransTableById,
  getSalaryTransTableList,

  //#endregion
  //#region  AddressTable
  getAddressTableList,
  createAddressTable,
  getInitialDataAddressTable,
  getAddressTableById,
  editAddressTable,
  deleteAddressTable,
  //#endregion
  //#region
  getContactTableList,
  createContactTable,
  getContactTableById,
  editContactTable,
  deleteContactTable,
  getInitialDataContactTable,
  //#endregion
  //#region position trans
  getPositionTransTableList,
  getPositionTransTableById,
  createPositionTransTable,
  editPositionTransTable,
  deletePositionTransTable,
  //#endregion
  //#region adjust position
  adjustPosition,
  getAdjustPositionById,
  getInitialAdjustSalary,
  editAdjustSalaryTable,
  getDocumentStatusDropDownByAdjustPosition,
  postStatusAdjustPosition,
  getAdjustResignInitialData,
  getAdjustResignInitialPostStatusData,
  //#endregion
  createResignTable,
  editEmployeeStatusResignTable,
  //#region TransferTrans
  getTransferTransTableList,
  getTransferTransTableById,
  editTransferTransTable,
  deleteTransferTransTable,
  //#region action
  getInitialDataAdjustTransfer,
  editAdjustTransfer,
  //#endregion
  //#region probation
  getProbationTransTableList,
  deleteProbationTransTable,
  getProbationTransTableById,
  editProbationTransTable,
  //#region action
  getInitialDataAdjustProbation,
  editAdjustProbation,
  //#endregion
  //# resign_trans
  getResignTableList,
  getResignTableById,
  editResignTable,
  deleteResignTable,
  //#endregion
  //#region EmergencyContact
  getInitialDataEmergencyContactTable,
  deleteEmergencyContactTable,
  editEmergencyContactTable,
  getEmergencyContactTableById,
  createEmergencyContactTable,
  getEmergencyContactTableList,
  //#endregion
  getInitialData,
  //resign status employee
  getAdjustBacktoworkInitialData,
  createBacktoworkTable,
  editEmployeeStatusBacktoworkTable,
  //leave_trans
  getAdjustLeaveTransInitialPostStatusData,
  getEmpcode,
  getInitialDataCertificateTrans,
  getTimeticketInitialData,
  getOvertimeInitialData,
  createOvertimeTable,
  getOvertimeTableList,
  getOvertimeTableById,
  editOvertimeTable,
  deleteOvertimeTable,
  getOvertimePostInitialData,
  getMonthEmpcode,
  getDayEmpcode,
  postStatusAdjustTransfer,
  postStatusAdjustSalary,
  postStatusAdjustProbation,
  postStatusReqestOvertime,
  postStatusLeaveTrans,
  getToDoListByEmployeeId,
  getInitialDataJobTrans,
  getJobTransTableList,
  getJobTransTableById,
  createJobTransTable,
  editJobTransTable,
  deleteJobTransTable,
  getJobDropdown,
  getFielChangeDropdown,
  // print document
  // getPrintDocumentInitialData
  getDocmuentTemplate,
  printDocumentTemplate,
  //#region work experience
  getWorkExperienceTableList,
  getInitialDataOfWorkExperience,
  createWorkExperienceTable,
  getWorkExperienceTableById,
  editWorkExperienceTable,
  deleteWorkExperienceTable,
  //#endregion
  //#region relative
  createRelative,
  getRelativeTableList,
  editRelativeTable,
  deleteRelativeTable,
  getRelativeTableById,
  getRelativeDropdown,
  //#endregion relative
  //#region Bookbank
  getBookBankTableList,
  getBankDropDown,
  getinitialdataOfBookBank,
  createBookBankTable,
  getBookBankTableById,
  editBookBankTable,
  deleteBookBankTable,
  //#endregion
  // Work Time Trans
  getWorktimeTransTableList,
  getWorktimeTransTableById,
  createWorktimeTransTable,
  editWorktimeTransTable,
  deleteWorktimeTransTable,
  getInitialDataWorktimeTrans,
  getWorktimeTypeDropdown,
  //#endregion relative
  //#legalpunishment
  createLegalPunishmentTable,
  getLegalPunishmentTableList,
  editLegalPunishmentTable,
  deleteLegalPunishmentTable,
  getLegalPunishmentTableById,
  getLegalPunishmentDropdown,
  //#endregion relative
  //PUNISHMENT_TRANS_INFO
  getPunishmentTransTableList,
  getPunishmentTransTableById,
  createPunishmentTransTable,
  getPunishmentTypeByCode,
  editPunishmentTransTable,
  deletePunishmentTransTable,
  getPunishmentTypeDropdown,
  //#endregion PUNISHMENT_TRANS_INFO
};
