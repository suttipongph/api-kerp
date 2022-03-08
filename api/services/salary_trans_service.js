const model = require("../model/salary_trans_model");
const Empmodel = require("../model/employee_model");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  SalaryTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const rejectTransModel = require("../model/reject_trans_model");

let createSalaryTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSalaryTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteSalaryTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSalaryTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialAdjustSalaryPostStatus = async (req) => {
  try {
    var emp = await model.view(req);
    var ref_type = RefType.SALARY_TRANS;
    var statusId = SalaryTransDocumentStatus.POST;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    return {
      salary_trans_uuid: emp.salary_trans_uuid,
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status: emp.employee_status,
      salary_trans_date: emp.salary_trans_date,
      document_status_uuid: documentStatusPost.document_status_uuid,
      effective_date: emp.effective_date,
      remark: emp.remark,
      salary_new: emp.salary_new,
      salary_old: emp.salary_old,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialAdjustSalaryCancelStatus = async (req) => {
  try {
    var emp = await model.view(req);
    var ref_type = RefType.SALARY_TRANS;
    var statusId = SalaryTransDocumentStatus.REJECT;
    var documentStatusReject =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    emp["description"] =
      "Employee: " +
      emp.employee_value +
      "\nDepartment: " +
      emp.department_value +
      "    Position: " +
      emp.position_value +
      "\nSalary old: " +
      emp.salary_old_value +
      "    To    Salary new: " +
      emp.salary_new_value +
      "\nSalary trans date: " +
      emp.salary_trans_date +
      "    Effective date : " +
      emp.effective_date;

    return {
      salary_trans_uuid: emp.salary_trans_uuid,
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status: emp.employee_status,
      salary_trans_date: emp.salary_trans_date,
      document_status_uuid: documentStatusReject.document_status_uuid,
      effective_date: emp.effective_date,
      remark: emp.remark,
      salary_new: emp.salary_new,
      salary_old: emp.salary_old,
      ref_type: RefType.SALARY_TRANS,
      ref_uuid: emp.salary_trans_uuid,
      description: emp.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialAdjustSalaryCompleteStatus = async (req) => {
  try {
    var emp = await model.view(req);
    var ref_type = RefType.SALARY_TRANS;
    var statusId = SalaryTransDocumentStatus.COMPLETE;
    var documentStatusComplete =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    return {
      salary_trans_uuid: emp.salary_trans_uuid,
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status: emp.employee_status,
      salary_trans_date: emp.salary_trans_date,
      document_status_uuid: documentStatusComplete.document_status_uuid,
      effective_date: emp.effective_date,
      remark: emp.remark,
      salary_new: emp.salary_new,
      salary_old: emp.salary_old,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let editSalaryTransTableComplete = async (req) => {
  try {
    var updateSalary = await model.edit(req);
    var updateEmpSalary = await Empmodel.editsalary(req);

    if (updateSalary == null) {
      throw new Error(e.message);
    }
    if (updateEmpSalary == null) {
      throw new Error(e.message);
    }

    return { updateSalary, updateEmpSalary };
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusAdjustSalary = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.SALARY_TRANS,
      SalaryTransDocumentStatus.POST
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let editCancelStatusAndCreateRejectTransTable = async (req) => {
  try {
    var editSalaryCancelStatus = await model.edit(req);
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (editSalaryCancelStatus == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { editSalaryCancelStatus, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getSalaryTransTableList,
  getSalaryTransTableById,
  createSalaryTransTable,
  editSalaryTransTable,
  deleteSalaryTransTable,
  getSalaryTransDropdown,
  getInitialAdjustSalaryPostStatus,
  getInitialAdjustSalaryCancelStatus,
  getInitialAdjustSalaryCompleteStatus,
  editSalaryTransTableComplete,
  postStatusAdjustSalary,
  editCancelStatusAndCreateRejectTransTable,
};
