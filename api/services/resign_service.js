const model = require("../model/resign_model");
const constantsValue = require("../shared/constants/shared_constants");
const backtoworkModel = require("../model/backtowork_model");
const documentstatusModel = require("../model/document_status_model");
const employeeModel = require("../model/employee_model");
const mTool = require("../shared/tools/tools");
const {
  ResignDocumentStatus,
} = require("../shared/constants/documentStatusId");
const { RefType } = require("../shared/constants/enumConstants");
const { epmloyee_status } = require("../shared/constants/shared_constants");
const resignModel = require("../model/resign_model");
const rejectTransModel = require("../model/reject_trans_model");
let createResignTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResignTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editResignTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteResignTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResignTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getResignDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustBacktoworkInitialData = async (req) => {
  try {
    var resign = await employeeModel.view(req);
    var resignmodel = await resignModel.getResignDate(req);
    if (resignModel == undefined) {
      resign.resign_date = resignmodel.effective_date;
    } else {
      resign.resign_date = null;
    }
    resign.employee_status = constantsValue.epmloyee_status.NORMAL;
    resign.remark = null;
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editEmployeeStatusBacktowprkTable = async (req) => {
  try {
    var status = await model.edit(req);
    req.body["backtowork_date"] = new Date().toISOString();
    var backtowork = await backtoworkModel.create(req);
    if (status === null) {
      throw new Error(e.message);
    }
    if (backtowork === null) {
      throw new Error(e.message);
    }
    return backtowork;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustResignStatus = async (req) => {
  try {
    var status = await model.edit(req);

    if (status === null) {
      throw new Error(e.message);
    }
    return status;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialData = async (req) => {
  try {
    var resign = await model.view(req);
    resign.filing_date = mTool.getTHBEdate(new Date());
    resign.document_status_uuid =
      documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Draft
      );
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialPostStatusData = async (req) => {
  try {
    var resign = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Post
      );
    resign.document_status_uuid = document_status_model.document_status_uuid;
    resign.filing_date = mTool.getTHBEdate(new Date());
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialApprovedStatusData = async (req) => {
  try {
    var resign = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Approved
      );
    resign.document_status_uuid = document_status_model.document_status_uuid;
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialRejectStatusData = async (req) => {
  try {
    var resign = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Reject
      );
    resign.document_status_uuid = document_status_model.document_status_uuid;

    resign["description"] =
      "Employee: " +
      resign.employee_value +
      "\nDepartment: " +
      resign.department_value +
      "\nPosition: " +
      resign.position_value +
      "\nResignation date: " +
      resign.resignation_date +
      "\nFiling date: " +
      resign.filing_date +
      "          Reason for resign: " +
      resign.reason_for_leaving;

    resign.ref_type = RefType.Resign;
    resign.ref_uuid = resign.resign_uuid;

    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getAdjustResignInitialComplateStatusData = async (req) => {
  try {
    var resign = await model.view(req);
    const document_status_model =
      await documentstatusModel.getDocumentStatusByReftype(
        RefType.Resign,
        ResignDocumentStatus.Complete
      );

    resign.document_status_uuid = document_status_model.document_status_uuid;
    return resign;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustResignPostStatus = async (req) => {
  try {
    var status = await model.edit(req);
    if (status === null) {
      throw new Error(e.message);
    }
    return status;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustResignApprovedStatus = async (req) => {
  try {
    var status = await model.edit(req);
    if (status === null) {
      throw new Error(e.message);
    }
    return status;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editAdjustResignComplateStatus = async (req) => {
  try {
    var status = await model.edit(req);
    req.body.employee_status = epmloyee_status.RESIGN;
    var employee_status = await employeeModel.editComplate(req);
    if (status === null) {
      throw new Error();
    }
    if (employee_status === null) {
      throw new Error();
    }
    return status;
  } catch (e) {
    throw new Error(e.message);
  }
};
let editRejectResignAndCreateRejectTrans = async (req) => {
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
module.exports = {
  getResignTableList,
  getResignTableById,
  createResignTable,
  editResignTable,
  deleteResignTable,
  getResignDropdown,
  getAdjustBacktoworkInitialData,
  editEmployeeStatusBacktowprkTable,
  getAdjustResignInitialData,
  editAdjustResignPostStatus,
  editAdjustResignApprovedStatus,
  editAdjustResignComplateStatus,
  getAdjustResignInitialPostStatusData,
  getAdjustResignInitialApprovedStatusData,
  getAdjustResignInitialRejectStatusData,
  getAdjustResignInitialComplateStatusData,
  editAdjustResignStatus,
  editRejectResignAndCreateRejectTrans,
};
