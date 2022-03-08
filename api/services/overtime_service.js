const model = require("../model/overtime_model");
const Empmodel = require("../model/employee_model");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  OvertimeDocumentStatus,
} = require("../shared/constants/documentStatusId");
const rejectTransModel = require("../model/reject_trans_model");
let createOvertimeTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimeTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editOvertimeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteOvertimeTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimeTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimeDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimeInitialData = async (req) => {
  try {
    var emp = await Empmodel.view(req);
    var ref_type = RefType.OVER_TIME;
    var statusId = OvertimeDocumentStatus.Draft;
    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      employee_uuid: emp.employee_uuid,
      document_status: documentStatusDraft.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimePostInitialData = async (req) => {
  try {
    var overtimeModel = await model.view(req);
    var ref_type = RefType.OVER_TIME;
    var statusId = OvertimeDocumentStatus.Post;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      position_uuid: overtimeModel.position_uuid,
      department_uuid: overtimeModel.department_uuid,
      employee_uuid: overtimeModel.employee_uuid,
      document_status: documentStatusPost.document_status_uuid,
      worktimetype: overtimeModel.worktimetype,
      date: overtimeModel.date,
      overtime_start_time: overtimeModel.overtime_start_time,
      overtime_end_time: overtimeModel.overtime_end_time,
      remark: overtimeModel.remark,
      reason_request_overtime: overtimeModel.reason_request_overtime,
      overtime_uuid: overtimeModel.overtime_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getOvertimeApproveInitialData = async (req) => {
  try {
    var overtimeModel = await model.view(req);
    var ref_type = RefType.OVER_TIME;
    var statusId = OvertimeDocumentStatus.Approved;
    var documentStatusApproved =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      position_uuid: overtimeModel.position_uuid,
      department_uuid: overtimeModel.department_uuid,
      employee_uuid: overtimeModel.employee_uuid,
      document_status: documentStatusApproved.document_status_uuid,
      worktimetype: overtimeModel.worktimetype,
      date: overtimeModel.date,
      overtime_start_time: overtimeModel.overtime_start_time,
      overtime_end_time: overtimeModel.overtime_end_time,
      remark: overtimeModel.remark,
      reason_request_overtime: overtimeModel.reason_request_overtime,
      overtime_uuid: overtimeModel.overtime_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getOvertimeCompleteInitialData = async (req) => {
  try {
    var overtimeModel = await model.view(req);
    var ref_type = RefType.OVER_TIME;
    var statusId = OvertimeDocumentStatus.Complete;
    var documentStatusComplete =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      position_uuid: overtimeModel.position_uuid,
      department_uuid: overtimeModel.department_uuid,
      employee_uuid: overtimeModel.employee_uuid,
      document_status: documentStatusComplete.document_status_uuid,
      worktimetype: overtimeModel.worktimetype,
      date: overtimeModel.date,
      overtime_start_time: overtimeModel.overtime_start_time,
      overtime_end_time: overtimeModel.overtime_end_time,
      remark: overtimeModel.remark,
      reason_request_overtime: overtimeModel.reason_request_overtime,
      overtime_uuid: overtimeModel.overtime_uuid,
      reason_leader: overtimeModel.reason_leader,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusReqestOvertime = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.OVER_TIME,
      OvertimeDocumentStatus.Post
    );
    req.body.document_status = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getOvertimeRejectInitialData = async (req) => {
  try {
    var overtimeModel = await model.view(req);
    var ref_type = RefType.OVER_TIME;
    var statusId = OvertimeDocumentStatus.Reject;
    var documentStatusReject =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    overtimeModel["description"] =
      "Employee: " +
      overtimeModel.employee_value +
      "\nDepartment: " +
      overtimeModel.department_value +
      "    Position: " +
      overtimeModel.position_value +
      "\ndate: " +
      overtimeModel.date +
      "    start time : " +
      overtimeModel.overtime_start_time +
      "    end time : " +
      overtimeModel.overtime_end_time +
      "\nReason request overtime : " +
      overtimeModel.reason_request_overtime;

    return {
      position_uuid: overtimeModel.position_uuid,
      department_uuid: overtimeModel.department_uuid,
      employee_uuid: overtimeModel.employee_uuid,
      document_status: documentStatusReject.document_status_uuid,
      worktimetype: overtimeModel.worktimetype,
      date: overtimeModel.date,
      overtime_start_time: overtimeModel.overtime_start_time,
      overtime_end_time: overtimeModel.overtime_end_time,
      remark: overtimeModel.remark,
      reason_request_overtime: overtimeModel.reason_request_overtime,
      overtime_uuid: overtimeModel.overtime_uuid,
      ref_type: RefType.OVER_TIME,
      ref_uuid: overtimeModel.overtime_uuid,
      description: overtimeModel.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let editRejectOvertime = async (req) => {
  try {
    var editRejectOvertime = await model.edit(req);
    req.body["remark"] = req.body.reason_leader;
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (editRejectOvertime == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { editRejectOvertime, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getOvertimeTableList,
  getOvertimeTableById,
  createOvertimeTable,
  editOvertimeTable,
  deleteOvertimeTable,
  getOvertimeDropdown,
  getOvertimeInitialData,
  getOvertimePostInitialData,
  getOvertimeApproveInitialData,
  getOvertimeCompleteInitialData,
  postStatusReqestOvertime,
  getOvertimeRejectInitialData,
  editRejectOvertime,
};
