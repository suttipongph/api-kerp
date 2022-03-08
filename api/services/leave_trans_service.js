const model = require("../model/leave_trans_model");
const employeeModel = require("../model/employee_model");
const documentstatusModel = require("../model/document_status_model");
const {
  LeaveTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const { RefType } = require("../shared/constants/enumConstants");
const mTool = require("../shared/tools/tools");
const rejectTransModel = require("../model/reject_trans_model");
let createLeaveTransTable = async (req) => {
  try {
    var leave_trans = await model.create(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Draft
      );
    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;
    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialData = async (req) => {
  try {
    var leave_trans = await employeeModel.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Draft
      );
    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;
    leave_trans.ref_uuid = leave_trans.employee_uuid;
    leave_trans.leave_trans_start_date = mTool.getTHBEdate(new Date());
    leave_trans.leave_trans_end_date = mTool.getTHBEdate(new Date());
    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editLeaveTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustLeaveTransStatus = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustLeaveTransApprovedStatus = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustLeaveTransRejectStatus = async (req) => {
  try {
    var editRejectResignStatus = await model.edit(req);
    req.body["remark"] = req.body.reason_leader;
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (editRejectResignStatus == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { editRejectResignStatus, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustLeaveTransComplateStatus = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteLeaveTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransTableById = async (req) => {
  try {
    // var leave_trans = await model.view(req);
    // const document_status_model = await documentstatusModel.getDocumentStatusByReftype(RefType.LEAVE_TRANS, LeaveTransDocumentStatus.Post);
    // leave_trans.document_status_uuid  = document_status_model.document_status_uuid
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustLeaveTransInitialPostStatusData = async (req) => {
  try {
    var leave_trans = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Post
      );
    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;
    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustLeaveTransInitialApprovedStatusData = async (req) => {
  try {
    var leave_trans = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Approved
      );
    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;
    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustLeaveTransInitialRejectStatusData = async (req) => {
  try {
    var leave_trans = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Reject
      );

    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;

    leave_trans["description"] =
      "Employee: " +
      leave_trans.employee_value +
      "\nLeave trans name: " +
      leave_trans.leave_trans_name +
      "          Leave trans type: " +
      leave_trans.leave_trans_type_value +
      "\nLeave trans start date : " +
      leave_trans.leave_trans_start_date +
      "         Leave trans start time : " +
      leave_trans.leave_trans_start_time +
      "\nLeave trans end date : " +
      leave_trans.leave_trans_end_date +
      "        Leave trans end time : " +
      leave_trans.leave_trans_end_time +
      "\nReason for leaving : " +
      leave_trans.reason_for_leaving;

    leave_trans.ref_type = RefType.LEAVE_TRANS;
    leave_trans.ref_uuid = leave_trans.leave_trans_uuid;

    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustLeaveTransInitialComplateStatusData = async (req) => {
  try {
    var leave_trans = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.LEAVE_TRANS,
        LeaveTransDocumentStatus.Complete
      );
    leave_trans.document_status_uuid =
      document_status_model.document_status_uuid;
    return leave_trans;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLeaveTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusLeaveTrans = async (req) => {
  try {
    var postStatus = await documentstatusModel.getDocumentStatusByReftype(
      RefType.LEAVE_TRANS,
      LeaveTransDocumentStatus.Post
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getLeaveTransTableList,
  getLeaveTransTableById,
  createLeaveTransTable,
  editLeaveTransTable,
  deleteLeaveTransTable,
  getLeaveTransDropdown,
  getInitialData,
  getAdjustLeaveTransInitialPostStatusData,
  getAdjustLeaveTransInitialApprovedStatusData,
  getAdjustLeaveTransInitialRejectStatusData,
  editAdjustLeaveTransStatus,
  editAdjustLeaveTransApprovedStatus,
  editAdjustLeaveTransRejectStatus,
  getAdjustLeaveTransInitialComplateStatusData,
  editAdjustLeaveTransComplateStatus,
  postStatusLeaveTrans,
};
