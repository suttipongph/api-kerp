const model = require("../model/employee_model");
const adjustPositionService = require("../services/adjust_position_service");
const SalaryTransService = require("../services/salary_trans_service");
const constantsValue = require("../shared/constants/shared_constants");
const resignModel = require("../model/resign_model");
const documentStatusModel = require("../model/document_status_model");
const backtoworkModel = require("../model/backtowork_model");
const bookBankModel = require("../model/book_bank_model");
const {
  ResignDocumentStatus,
} = require("../shared/constants/documentStatusId");
const TransfertransService = require("../services/transfer_trans_service");
const mTools = require("../shared/tools/tools");
const probationTransService = require("../services/probation_trans_service");
const documentstatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const adressmodel = require("../model/address_model");
const {
  ProbationTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const {
  SalaryTransDocumentStatus,
} = require("../shared/constants/documentStatusId");

const contactmodel = require("../model/contact_model");
const emergencymodel = require("../model/emergency_contact_model");
const educationmodel = require("../model/education_model");
let createEmployeeTable = async (req) => {
  try {
    var createEmp = await model.create(req);
    (req.body["ref_type"] = RefType.Employee),
      (req.body["ref_uuid"] = createEmp.employee_uuid);
    req.body["employee_uuid"] = createEmp.employee_uuid;

    req.body["is_primary"] = true;
    await contactmodel.create(req);
    await emergencymodel.create(req);
    await educationmodel.create(req);
    await bookBankModel.create(req);
    req.body["remark"] = "ที่อยู่ตามทะเบียนบ้าน";
    await adressmodel.create(req);
    req.body.address = req.body.current_address_data;
    req.body.country_uuid = req.body.current_address_country_uuid;
    req.body.province_uuid = req.body.current_address_province_uuid;
    req.body.district_uuid = req.body.current_address_district_uuid;
    req.body.sub_district_uuid = req.body.current_address_sub_district_uuid;
    req.body.zipcode = req.body.current_address_zipcode;
    req.body["is_primary"] = false; //ที่อยู่ปัจจุบัน
    req.body["remark"] = "ที่อยู่ปัจจุบัน";

    await adressmodel.create(req);

    return createEmp;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getEmployeeTableListByResign = async (req) => {
  try {
    return await model.list_by_resign(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let editEmployeeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editEmployeeStatusResignTable = async (req) => {
  try {
    req.body["resign_date"] = new Date().toISOString();
    var resign = await resignModel.create(req);
    if (resign === null) {
      throw new Error();
    }
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let postResign = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.Resign,
      ResignDocumentStatus.Post
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    req.body.filing_date = new Date().toISOString();

    var resign = await resignModel.create(req);

    if (resign === null) {
      throw new Error();
    }
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editEmployeeStatusBacktoworkTable = async (req) => {
  try {
    var status = await model.editbacktowork(req);
    req.body["backtowork_date"] = mTools.toDateCurrectFormat(
      req.body["effective_date"]
    );

    var backtowork = await backtoworkModel.create(req);
    if (status === null) {
      throw new Error();
    }
    if (backtowork === null) {
      throw new Error();
    }
    return backtowork;
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteEmployeeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeDropDown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDocmuentTemplate = async (req) => {
  try {
    return await model.dropdown_print_document(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let adjustPosition = async (req) => {
  try {
    var createPositiontrans =
      await adjustPositionService.createPositionTransTable(req);

    if (createPositiontrans == null) {
      throw new Error();
    }

    return createPositiontrans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialAdjustSalary = async (req) => {
  try {
    var employee = await model.view(req);

    var salary_trans_date = mTools.getTHBEdate(new Date());

    var ref_type = RefType.SALARY_TRANS;
    var statusId = SalaryTransDocumentStatus.DRAFT;
    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      employee_uuid: employee.employee_uuid,
      position_uuid: employee.position_uuid,
      department_uuid: employee.department_uuid,
      salary_old: employee.salary_uuid,
      salary_trans_date: salary_trans_date,
      document_status_uuid: documentStatusDraft.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let editAdjustSalaryTable = async (req) => {
  try {
    var createSalarytrans = await SalaryTransService.createSalaryTransTable(
      req
    );

    if (createSalarytrans == null) {
      throw new Error();
    }

    return createSalarytrans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialData = async (req) => {
  try {
    var resign = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Draft
      );
    resign.document_status_uuid = document_status_model.document_status_uuid;
    resign.remark = null;
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialPostStatusData = async (req) => {
  try {
    var resign = await model.view(req);
    resign.document_status_uuid =
      documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Post
      );
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};

let editAdjustTransfer = async (req) => {
  try {
    var createTransfertrans =
      await TransfertransService.createTransferTransTable(req);

    if (createTransfertrans == null) {
      throw new Error();
    }

    return createTransfertrans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAdjustProbation = async (req) => {
  try {
    var emp = await model.view(req);
    var AdjustProbationdate = mTools.getTHBEdate(new Date());
    var ref_type = RefType.PROBATION_TANS;
    var statusId = ProbationTransDocumentStatus.DRAFT;

    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status_uuid: emp.employee_status,
      probation_trans_date: AdjustProbationdate,
      document_status_uuid: documentStatusDraft.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustProbation = async (req) => {
  try {
    var createProbationtrans =
      await probationTransService.createProbationTransTable(req);

    if (createProbationtrans == null) {
      throw new Error();
    }
    return createProbationtrans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let updateProbationEmployeeTable = async (req) => {
  try {
    return await model.editProbation(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataTimeticket = async (req) => {
  try {
    var employee = await model.view(req);
    return {
      employee_uuid: employee.employee_uuid,
      position_uuid: employee.position_uuid,
      department_uuid: employee.department_uuid,
      employee_status: employee.employee_status,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getEmpcode = async (req) => {
  try {
    var employee = await model.getEmpcode(req);

    if (employee != null) {
      var lastEmpCode = employee.employee_code;
      var NewEmpCode = parseInt(lastEmpCode) + 1;
    } else {
      // eslint-disable-next-line no-redeclare
      var NewEmpCode = 2001;
    }
    return NewEmpCode;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getMonthEmpcode = async (req) => {
  try {
    var employee = await model.getMonthEmpcode(req);
    if (employee != null) {
      var lastEmpCode = employee.employee_code;

      var NewEmpCode = parseInt(lastEmpCode) + 1;
    } else {
      // eslint-disable-next-line no-redeclare
      var NewEmpCode = 1001;
    }
    return NewEmpCode;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDayEmpcode = async (req) => {
  try {
    var employee = await model.getDayEmpcode(req);
    if (employee != null) {
      var lastEmpCode = employee.employee_code;

      var NewEmpCode = parseInt(lastEmpCode) + 1;
    } else {
      // eslint-disable-next-line no-redeclare
      var NewEmpCode = 2001;
    }
    return NewEmpCode;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getToDoListByEmployeeId = async (req) => {
  try {
    var employee_list = await model.viewToDoListEmp(req);
    return {
      employee_list,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getEmployeeTableList,
  getEmployeeTableById,
  createEmployeeTable,
  editEmployeeTable,
  deleteEmployeeTable,
  getEmployeeDropDown,
  adjustPosition,
  getInitialAdjustSalary,
  editAdjustSalaryTable,
  getAdjustResignInitialData,
  editEmployeeStatusResignTable,
  postResign,
  editAdjustTransfer,
  getInitialDataAdjustProbation,
  editAdjustProbation,
  editEmployeeStatusBacktoworkTable,
  updateProbationEmployeeTable,
  getInitialDataTimeticket,
  getAdjustResignInitialPostStatusData,
  getEmployeeTableListByResign,
  getEmpcode,
  getMonthEmpcode,
  getDayEmpcode,
  getToDoListByEmployeeId,
  getDocmuentTemplate,
};
