const model = require("../model/adjust_position_modle");
const employeeModel = require("../model/employee_model");
const documentStatusModel = require("../model/document_status_model");
const mTools = require("../shared/tools/tools");
const { RefType } = require("../shared/constants/enumConstants");
const {
  PrositionTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
let editEmployeeTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let createPositionTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let postStatusAdjustPosition = async (req) => {
  try {
    var postStatus = await documentStatusModel.getDocumentStatusByReftype(
      RefType.PROSITION_TANS,
      PrositionTransDocumentStatus.POST
    );
    req.body.document_status_uuid = postStatus.document_status_uuid;
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustPositionById = async (req) => {
  try {
    var ref_type = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.DRAFT;
    var employee = await employeeModel.view(req);
    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    var position_trans_date = mTools.getTHBEdate(new Date());

    return {
      employee_uuid: employee.employee_uuid,
      position_old: employee.position_uuid,
      department_uuid: employee.department_uuid,
      position_trans_date: position_trans_date,
      document_status_uuid: documentStatusDraft.document_status_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createPositionTransTable,
  editEmployeeTable,
  getAdjustPositionById,
  postStatusAdjustPosition,
};
