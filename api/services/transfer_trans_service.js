const model = require("../model/transfer_trans_model");
const employee_model = require("../model/employee_model");
const mTools = require("../shared/tools/tools");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  TransferTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const rejectTransModel = require("../model/reject_trans_model");
let createTransferTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTransferTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editTransferTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteTransferTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTransferTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTransferTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAdjustTransfer = async (req) => {
  try {
    var emp = await employee_model.view(req);

    var transferdate = mTools.getTHBEdate(new Date());
    var ref_type = RefType.TRANSFER_TRANS;
    var statusId = TransferTransDocumentStatus.DRAFT;
    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    return {
      employee_uuid: emp.employee_uuid,
      position_uuid: emp.position_uuid,
      department_uuid: emp.department_uuid,
      transfer_trans_date: transferdate,

      document_status_uuid: documentStatusDraft.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusAdjustTransfer = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.TRANSFER_TRANS,
      TransferTransDocumentStatus.POST
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let getInitialDataAdjustPostTransfer = async (req) => {
  try {
    var transfer = await model.view(req);

    var ref_type = RefType.TRANSFER_TRANS;
    var statusId = TransferTransDocumentStatus.POST;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      employee_uuid: transfer.employee_uuid,
      position_uuid: transfer.position_uuid,
      department_uuid: transfer.department_uuid,
      transfer_trans_date: transfer.transfer_trans_date,
      effective_date: transfer.effective_date,
      document_status_uuid: documentStatusPost.document_status_uuid,
      department_new: transfer.department_new,
      remark: transfer.remark,
      transfer_trans_uuid: transfer.transfer_trans_uuid,
      position_new: transfer.position_new,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustTransfer = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAdjustCancelTransfer = async (req) => {
  try {
    var transfer = await model.view(req);

    var ref_type = RefType.TRANSFER_TRANS;
    var statusId = TransferTransDocumentStatus.REJECT;
    var documentStatusREJECT =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    transfer["description"] =
      "Employee: " +
      transfer.employee_value +
      "\n Department old: " +
      transfer.department_value +
      "          Position old: " +
      transfer.position_old_value +
      "\nTo Department new: " +
      transfer.department_new_value +
      "          Position new: " +
      transfer.position_new_value +
      "\nTransfer trans date : " +
      transfer.transfer_trans_date +
      "          Effective date : " +
      transfer.effective_date;

    return {
      employee_uuid: transfer.employee_uuid,
      position_uuid: transfer.position_uuid,
      department_uuid: transfer.department_uuid,
      transfer_trans_date: transfer.transfer_trans_date,
      effective_date: transfer.effective_date,
      document_status_uuid: documentStatusREJECT.document_status_uuid,
      department_new: transfer.department_new,
      remark: transfer.remark,
      transfer_trans_uuid: transfer.transfer_trans_uuid,
      position_new: transfer.position_new,
      ref_type: RefType.TRANSFER_TRANS,
      ref_uuid: transfer.transfer_trans_uuid,
      description: transfer.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataAdjustCompleteTransfer = async (req) => {
  try {
    var transfer = await model.view(req);

    var ref_type = RefType.TRANSFER_TRANS;
    var statusId = TransferTransDocumentStatus.COMPLETE;
    var documentStatusCOMPLETE =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      employee_uuid: transfer.employee_uuid,
      position_uuid: transfer.position_uuid,
      department_uuid: transfer.department_uuid,
      transfer_trans_date: transfer.transfer_trans_date,
      effective_date: transfer.effective_date,
      document_status_uuid: documentStatusCOMPLETE.document_status_uuid,
      department_new: transfer.department_new,
      remark: transfer.remark,
      transfer_trans_uuid: transfer.transfer_trans_uuid,
      position_new: transfer.position_new,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let editTransferTransTableComplete = async (req) => {
  try {
    var updateTraansfer = await model.edit(req);
    var updateEmpTransfer = await employee_model.editDep(req);
    var updateEmpPositionTransfer = await employee_model.editposition(req);
    if (updateTraansfer == null) {
      throw new Error(e.message);
    }
    if (updateEmpTransfer == null) {
      throw new Error(e.message);
    }
    if (updateEmpTransfer == null) {
      throw new Error(e.message);
    }
    return { updateTraansfer, updateEmpTransfer, updateEmpPositionTransfer };
  } catch (e) {
    throw new Error(e.message);
  }
};

let editCancelTransferAndCreateRejectTrans = async (req) => {
  try {
    var updateTraansfer = await model.edit(req);

    var CreateRejectTrans = await rejectTransModel.create(req);
    if (updateTraansfer == null) {
      throw new Error(e.message);
    }

    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return {
      updateTraansfer,

      CreateRejectTrans,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getTransferTransTableList,
  getTransferTransTableById,
  createTransferTransTable,
  editTransferTransTable,
  deleteTransferTransTable,
  getTransferTransDropdown,
  getInitialDataAdjustTransfer,
  postStatusAdjustTransfer,
  getInitialDataAdjustPostTransfer,
  editAdjustTransfer,
  getInitialDataAdjustCancelTransfer,
  getInitialDataAdjustCompleteTransfer,
  editTransferTransTableComplete,
  editCancelTransferAndCreateRejectTrans,
};
