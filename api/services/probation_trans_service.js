const model = require("../model/probation_trans_model");
const mTools = require("../shared/tools/tools");
const documentStatusModel = require("../model/document_status_model");
const Empmodel = require("../model/employee_model");
const { RefType } = require("../shared/constants/enumConstants");

const {
  ProbationTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const rejectTransModel = require("../model/reject_trans_model");
let createProbationTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getProbationTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editProbationTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteProbationTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getProbationTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getProbationTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataProbationPostStatus = async (req) => {
  try {
    var emp = await model.view(req);

    var ref_type = RefType.PROBATION_TANS;
    var statusId = ProbationTransDocumentStatus.POST;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    return {
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status: emp.employee_status,
      probation_trans_date: emp.probation_trans_date,
      document_status_uuid: documentStatusPost.document_status_uuid,
      effective_date: emp.effective_date,
      remark: emp.remark,
      probation_trans_uuid: emp.probation_trans_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getProbationTransTableLeadList = async (req) => {
  try {
    return await model.leadlist(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataProbationCancelStatus = async (req) => {
  try {
    var probationtrans = await model.view(req);

    var ref_type = RefType.PROBATION_TANS;
    var statusId = ProbationTransDocumentStatus.REJECT;
    var documentStatusCancel =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    probationtrans["description"] =
      "Employee: " +
      probationtrans.employee_value +
      "\nDepartment: " +
      probationtrans.department_value +
      "    Position: " +
      probationtrans.position_value +
      "\nProbation trans date: " +
      probationtrans.probation_trans_date +
      "    Effective date : " +
      probationtrans.effective_date;

    return {
      employee_uuid: probationtrans.employee_uuid,
      position_uuid: probationtrans.position_uuid,
      department_uuid: probationtrans.department_uuid,
      employee_status: probationtrans.employee_status,
      probation_trans_date: probationtrans.probation_trans_date,
      document_status_uuid: documentStatusCancel.document_status_uuid,
      effective_date: probationtrans.effective_date,
      remark: probationtrans.remark,
      probation_trans_uuid: probationtrans.probation_trans_uuid,
      ref_type: RefType.PROBATION_TANS,
      ref_uuid: probationtrans.probation_trans_uuid,
      description: probationtrans.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getProbationTransTableHrList = async (req) => {
  try {
    return await model.hrlist(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialDataProbationCompleteStatus = async (req) => {
  try {
    var emp = await model.view(req);
    var ref_type = RefType.PROBATION_TANS;
    var statusId = ProbationTransDocumentStatus.COMPLETE;
    var documentStatusComplete =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_status: emp.employee_status,
      probation_trans_date: emp.probation_trans_date,
      document_status_uuid: documentStatusComplete.document_status_uuid,
      effective_date: emp.effective_date,
      remark: emp.remark,
      probation_trans_uuid: emp.probation_trans_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let CompleteProbationTransTable = async (req) => {
  try {
    var updateProbation = await model.edit(req);
    var updateEmpProbation = await Empmodel.editProbation(req);

    if (updateProbation == null) {
      throw new Error(e.message);
    }
    if (updateEmpProbation == null) {
      throw new Error(e.message);
    }
    return { updateProbation, updateEmpProbation };
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusAdjustProbation = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.PROBATION_TANS,
      ProbationTransDocumentStatus.POST
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editProbationCancelStatusAndCreateReject = async (req) => {
  try {
    var editProbationCancelStatus = await model.edit(req);
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (editProbationCancelStatus == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { editProbationCancelStatus, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getProbationTransTableList,
  getProbationTransTableById,
  createProbationTransTable,
  editProbationTransTable,
  deleteProbationTransTable,
  getProbationTransDropdown,
  getInitialDataProbationPostStatus,
  getProbationTransTableLeadList,
  getInitialDataProbationCancelStatus,
  getProbationTransTableHrList,
  getInitialDataProbationCompleteStatus,
  CompleteProbationTransTable,
  postStatusAdjustProbation,
  editProbationCancelStatusAndCreateReject,
};
