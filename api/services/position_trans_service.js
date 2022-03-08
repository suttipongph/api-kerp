const model = require("../model/position_trans_model");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  PrositionTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
const empolyee_model = require("../model/employee_model");
const rejectTransModel = require("../model/reject_trans_model");
let createPositionTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTransTableHRList = async (req) => {
  try {
    return await model.hrlist(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTransTableLeadList = async (req) => {
  try {
    return await model.leadlist(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editPositionTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deletePositionTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPositionTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataPostAdjustPosition = async (req) => {
  try {
    var position_trans_item = await model.view(req);

    var reftype = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.POST;
    var documentStatus = await documentStatusModel.getDocumentStatusByReftype(
      reftype,
      statusId
    );
    return {
      employee_uuid: position_trans_item.employee_uuid,
      department_uuid: position_trans_item.department_uuid,
      remark: position_trans_item.remark,
      position_old: position_trans_item.position_old,
      position_new: position_trans_item.position_new,
      position_trans_uuid: position_trans_item.position_trans_uuid,
      position_trans_date: position_trans_item.position_trans_date,
      effective_date: position_trans_item.effective_date,
      document_status_uuid: documentStatus.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataComplateAdjustPosition = async (req) => {
  try {
    var position_trans_item = await model.view(req);

    var reftype = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.COMPALTE;
    var documentStatus = await documentStatusModel.getDocumentStatusByReftype(
      reftype,
      statusId
    );
    return {
      employee_uuid: position_trans_item.employee_uuid,
      department_uuid: position_trans_item.department_uuid,
      remark: position_trans_item.remark,
      position_old: position_trans_item.position_old,
      position_new: position_trans_item.position_new,
      position_trans_uuid: position_trans_item.position_trans_uuid,
      position_trans_date: position_trans_item.position_trans_date,
      effective_date: position_trans_item.effective_date,
      document_status_uuid: documentStatus.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataCancelAdjustPosition = async (req) => {
  try {
    var position_trans_item = await model.view(req);

    var reftype = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.CANCEL;
    var documentStatus = await documentStatusModel.getDocumentStatusByReftype(
      reftype,
      statusId
    );

    position_trans_item["description"] =
      "Employee: " +
      position_trans_item.employee_value +
      "\n Department: " +
      position_trans_item.department_value +
      "\nPosition old: " +
      position_trans_item.position_old_value +
      "    To    Position new: " +
      position_trans_item.position_new_value +
      "\nPosition trans date: " +
      position_trans_item.position_trans_date +
      "    Effective date : " +
      position_trans_item.effective_date;

    return {
      employee_uuid: position_trans_item.employee_uuid,
      department_uuid: position_trans_item.department_uuid,
      remark: position_trans_item.remark,
      position_old: position_trans_item.position_old,
      position_new: position_trans_item.position_new,
      position_trans_uuid: position_trans_item.position_trans_uuid,
      position_trans_date: position_trans_item.position_trans_date,
      effective_date: position_trans_item.effective_date,
      document_status_uuid: documentStatus.document_status_uuid,
      ref_type: RefType.PROSITION_TANS,
      ref_uuid: position_trans_item.position_trans_uuid,
      description: position_trans_item.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let ComplateAdjustPosition = async (req) => {
  try {
    await empolyee_model.editposition(req);
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCancelStatusAndCreateRejectTransTable = async (req) => {
  try {
    var editPositionTransTable = await model.edit(req);
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (editPositionTransTable == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { editPositionTransTable, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getPositionTransTableList,
  getPositionTransTableById,
  createPositionTransTable,
  editPositionTransTable,
  deletePositionTransTable,
  getPositionTransDropdown,
  getPositionTransTableHRList,
  getPositionTransTableLeadList,
  getInitialDataPostAdjustPosition,
  getInitialDataComplateAdjustPosition,
  ComplateAdjustPosition,
  getInitialDataCancelAdjustPosition,
  editCancelStatusAndCreateRejectTransTable,
};
