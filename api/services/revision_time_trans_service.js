const model = require("../model/revision_time_trans_model");
const Empmodel = require("../model/employee_model");
const Timeticketmodel = require("../model/timeticket_model");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const rejectTransModel = require("../model/reject_trans_model");
const {
  RevisionTimeDocumentStatus,
} = require("../shared/constants/documentStatusId");
let createRevisionTimeTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRevisionTimeTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editRevisionTimeTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteRevisionTimeTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRevisionTimeTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRevisionTimeTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};

let postRevisionTime = async (req) => {
  try {
    var ref_type = RefType.REVISION_TIME;
    var statusId = RevisionTimeDocumentStatus.Post;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    req.body.document_status_uuid = documentStatusPost.document_status_uuid;

    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataRevisionTimeTransTable = async (req) => {
  try {
    var RevisionTimeData = await model.view(req);
    return {
      employee_uuid: RevisionTimeData.employee_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getPostInitialData = async (req) => {
  try {
    var RevisionTimeData = await model.view(req);
    var ref_type = RefType.REVISION_TIME;
    var statusId = RevisionTimeDocumentStatus.Post;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      revision_time_uuid: RevisionTimeData.revision_time_uuid,
      timeticket_uuid: RevisionTimeData.timeticket_uuid,
      employee_uuid: RevisionTimeData.employee_uuid,
      date: RevisionTimeData.date,
      timeticket_start_nt_1_old: RevisionTimeData.timeticket_start_nt_1_old,
      timeticket_start_nt_1_new: RevisionTimeData.timeticket_start_nt_1_new,

      timeticket_end_nt_1_old: RevisionTimeData.timeticket_end_nt_1_old,
      timeticket_end_nt_1_new: RevisionTimeData.timeticket_end_nt_1_new,

      timeticket_start_nt_2_old: RevisionTimeData.timeticket_start_nt_2_old,
      timeticket_start_nt_2_new: RevisionTimeData.timeticket_start_nt_2_new,

      timeticket_end_nt_2_old: RevisionTimeData.timeticket_end_nt_2_old,
      timeticket_end_nt_2_new: RevisionTimeData.timeticket_end_nt_2_new,

      timeticket_start_ent_1_old: RevisionTimeData.timeticket_start_ent_1_old,
      timeticket_start_ent_1_new: RevisionTimeData.timeticket_start_ent_1_new,

      timeticket_end_ent_1_old: RevisionTimeData.timeticket_end_ent_1_old,
      timeticket_end_ent_1_new: RevisionTimeData.timeticket_end_ent_1_new,

      timeticket_start_et_2_old: RevisionTimeData.timeticket_start_et_2_old,
      timeticket_start_et_2_new: RevisionTimeData.timeticket_start_et_2_new,

      timeticket_end_et_2_old: RevisionTimeData.timeticket_end_et_2_old,
      timeticket_end_et_2_new: RevisionTimeData.timeticket_end_et_2_new,

      timeticket_start_ot_old: RevisionTimeData.timeticket_start_ot_old,
      timeticket_start_ot_new: RevisionTimeData.timeticket_start_ot_new,

      timeticket_end_ot_old: RevisionTimeData.timeticket_end_ot_old,
      timeticket_end_ot_new: RevisionTimeData.timeticket_end_ot_new,

      document_status_uuid: documentStatusPost.document_status_uuid,
      remark_nt_1: RevisionTimeData.remark_nt_1,
      remark_nt_2: RevisionTimeData.remark_nt_2,
      remark_ent_1: RevisionTimeData.remark_et_1,
      remark_et_2: RevisionTimeData.remark_et_2,
      remark_ot: RevisionTimeData.remark_ot,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let getCancelInitialData = async (req) => {
  try {
    var RevisionTimeData = await model.view(req);
    var rejectDes = await model.view(req);
    var ref_type = RefType.REVISION_TIME;
    var statusId = RevisionTimeDocumentStatus.Reject;
    var documentStatusCancel =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    if (RevisionTimeData.remark_ot === null) {
      rejectDes.remark_ot = "-";
    }
    if (RevisionTimeData.timeticket_end_ot_new === null) {
      rejectDes.timeticket_end_ot_new = "-";
    }
    if (RevisionTimeData.timeticket_end_ot_old === null) {
      rejectDes.timeticket_end_ot_old = "-";
    }
    if (RevisionTimeData.timeticket_start_ot_new === null) {
      rejectDes.timeticket_start_ot_new = "-";
    }
    if (RevisionTimeData.timeticket_start_ot_old === null) {
      rejectDes.timeticket_start_ot_old = "-";
    }
    if (RevisionTimeData.remark_et_2 === null) {
      rejectDes.remark_et_2 = "-";
    }
    if (RevisionTimeData.timeticket_end_et_2_new === null) {
      rejectDes.timeticket_end_et_2_new = "-";
    }
    if (RevisionTimeData.timeticket_end_et_2_old === null) {
      rejectDes.timeticket_end_et_2_old = "-";
    }
    if (RevisionTimeData.timeticket_start_et_2_old === null) {
      rejectDes.timeticket_start_et_2_old = "-";
    }
    if (RevisionTimeData.timeticket_start_et_2_new === null) {
      rejectDes.timeticket_start_et_2_new = "-";
    }
    if (RevisionTimeData.remark_ent_1 === null) {
      rejectDes.remark_ent_1 = "-";
    }
    if (RevisionTimeData.timeticket_end_ent_1_new === null) {
      rejectDes.timeticket_end_ent_1_new = "-";
    }
    if (RevisionTimeData.timeticket_end_ent_1_old === null) {
      rejectDes.timeticket_end_ent_1_old = "-";
    }
    if (RevisionTimeData.timeticket_start_ent_1_old === null) {
      rejectDes.timeticket_start_ent_1_old = "-";
    }
    if (RevisionTimeData.timeticket_start_ent_1_new === null) {
      rejectDes.timeticket_start_ent_1_new = "-";
    }
    if (RevisionTimeData.remark_nt_1 === null) {
      rejectDes.remark_nt_1 = "-";
    }
    if (RevisionTimeData.timeticket_end_nt_1_new === null) {
      rejectDes.timeticket_end_nt_1_new = "-";
    }
    if (RevisionTimeData.timeticket_start_nt_1_new === null) {
      rejectDes.timeticket_start_nt_1_new = "-";
    }
    if (RevisionTimeData.timeticket_end_nt_1_old === null) {
      rejectDes.timeticket_end_nt_1_old = "-";
    }
    if (RevisionTimeData.timeticket_start_nt_1_old === null) {
      rejectDes.timeticket_start_nt_1_old = "-";
    }
    if (RevisionTimeData.remark_nt_2 === null) {
      rejectDes.remark_nt_2 = "-";
    }
    if (RevisionTimeData.timeticket_end_nt_2_new === null) {
      rejectDes.timeticket_end_nt_2_new = "-";
    }
    if (RevisionTimeData.timeticket_start_nt_2_new === null) {
      rejectDes.timeticket_start_nt_2_new = "-";
    }
    if (RevisionTimeData.timeticket_end_nt_2_old === null) {
      rejectDes.timeticket_end_nt_2_old = "-";
    }
    if (RevisionTimeData.timeticket_start_nt_2_old === null) {
      rejectDes.timeticket_start_nt_2_old = "-";
    }

    RevisionTimeData["description"] =
      "Employee : " +
      RevisionTimeData.employee_value +
      " Date : " +
      RevisionTimeData.date +
      "\n[ NT1 ]  Old time start : " +
      rejectDes.timeticket_start_nt_1_old +
      " to new time start : " +
      rejectDes.timeticket_start_nt_1_new +
      "\nOld time end : " +
      rejectDes.timeticket_end_nt_1_old +
      "to new time end : " +
      rejectDes.timeticket_end_nt_1_new +
      "\nRemark normal time 1 : " +
      rejectDes.remark_nt_1 +
      "\n[ NT2 ]  Old time start : " +
      rejectDes.timeticket_start_nt_2_old +
      " to new time start : " +
      rejectDes.timeticket_start_nt_2_new +
      "\nOld time end : " +
      rejectDes.timeticket_end_nt_2_old +
      " to new time end : " +
      rejectDes.timeticket_end_nt_2_new +
      "\nRemark normal time 2 : " +
      rejectDes.remark_nt_2 +
      "\n[ ENT1 ]  Old time start : " +
      rejectDes.timeticket_start_ent_1_old +
      " to new time start : " +
      rejectDes.timeticket_start_ent_1_old +
      "\nOld time end : " +
      rejectDes.timeticket_end_ent_1_old +
      " to new time end : " +
      rejectDes.timeticket_end_ent_1_new +
      "\nRemark extra time 1 : " +
      rejectDes.remark_ent_1 +
      "\n[ ENT2 ]  Old time start : " +
      rejectDes.timeticket_start_et_2_old +
      " to new time start : " +
      rejectDes.timeticket_start_et_2_old +
      "\nOld time end : " +
      rejectDes.timeticket_end_et_2_old +
      " to new time end : " +
      rejectDes.timeticket_end_et_2_new +
      "\nRemark extra time  : " +
      rejectDes.remark_et_2 +
      "\n[ OT ]  Old time start : " +
      rejectDes.timeticket_start_ot_old +
      " to new time start : " +
      rejectDes.timeticket_start_ot_new +
      "\nOld time end : " +
      rejectDes.timeticket_end_ot_old +
      " to new time end : " +
      rejectDes.timeticket_end_ot_new +
      "\nRemark overtime : " +
      rejectDes.remark_ot;

    return {
      revision_time_uuid: RevisionTimeData.revision_time_uuid,
      timeticket_uuid: RevisionTimeData.timeticket_uuid,
      employee_uuid: RevisionTimeData.employee_uuid,
      date: RevisionTimeData.date,
      timeticket_start_nt_1_old: RevisionTimeData.timeticket_start_nt_1_old,
      timeticket_start_nt_1_new: RevisionTimeData.timeticket_start_nt_1_new,

      timeticket_end_nt_1_old: RevisionTimeData.timeticket_end_nt_1_old,
      timeticket_end_nt_1_new: RevisionTimeData.timeticket_end_nt_1_new,

      timeticket_start_nt_2_old: RevisionTimeData.timeticket_start_nt_2_old,
      timeticket_start_nt_2_new: RevisionTimeData.timeticket_start_nt_2_new,

      timeticket_end_nt_2_old: RevisionTimeData.timeticket_end_nt_2_old,
      timeticket_end_nt_2_new: RevisionTimeData.timeticket_end_nt_2_new,

      timeticket_start_ent_1_old: RevisionTimeData.timeticket_start_ent_1_old,
      timeticket_start_ent_1_new: RevisionTimeData.timeticket_start_ent_1_new,

      timeticket_end_ent_1_old: RevisionTimeData.timeticket_end_ent_1_old,
      timeticket_end_ent_1_new: RevisionTimeData.timeticket_end_ent_1_new,

      timeticket_start_et_2_old: RevisionTimeData.timeticket_start_et_2_old,
      timeticket_start_et_2_new: RevisionTimeData.timeticket_start_et_2_new,

      timeticket_end_et_2_old: RevisionTimeData.timeticket_end_et_2_old,
      timeticket_end_et_2_new: RevisionTimeData.timeticket_end_et_2_new,

      timeticket_start_ot_old: RevisionTimeData.timeticket_start_ot_old,
      timeticket_start_ot_new: RevisionTimeData.timeticket_start_ot_new,

      timeticket_end_ot_old: RevisionTimeData.timeticket_end_ot_old,
      timeticket_end_ot_new: RevisionTimeData.timeticket_end_ot_new,

      document_status_uuid: documentStatusCancel.document_status_uuid,
      remark_nt_1: RevisionTimeData.remark_nt_1,
      remark_nt_2: RevisionTimeData.remark_nt_2,
      remark_ent_1: RevisionTimeData.remark_et_1,
      remark_et_2: RevisionTimeData.remark_et_2,
      remark_ot: RevisionTimeData.remark_ot,

      ref_type: RefType.REVISION_TIME,
      ref_uuid: RevisionTimeData.revision_time_uuid,
      description: RevisionTimeData.description,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCompleteInitialData = async (req) => {
  try {
    var RevisionTimeData = await model.view(req);
    var ref_type = RefType.REVISION_TIME;
    var statusId = RevisionTimeDocumentStatus.Complete;
    var documentStatusComplete =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    return {
      revision_time_uuid: RevisionTimeData.revision_time_uuid,
      timeticket_uuid: RevisionTimeData.timeticket_uuid,
      employee_uuid: RevisionTimeData.employee_uuid,
      date: RevisionTimeData.date,
      timeticket_start_nt_1_old: RevisionTimeData.timeticket_start_nt_1_old,
      timeticket_start_nt_1_new: RevisionTimeData.timeticket_start_nt_1_new,

      timeticket_end_nt_1_old: RevisionTimeData.timeticket_end_nt_1_old,
      timeticket_end_nt_1_new: RevisionTimeData.timeticket_end_nt_1_new,

      timeticket_start_nt_2_old: RevisionTimeData.timeticket_start_nt_2_old,
      timeticket_start_nt_2_new: RevisionTimeData.timeticket_start_nt_2_new,

      timeticket_end_nt_2_old: RevisionTimeData.timeticket_end_nt_2_old,
      timeticket_end_nt_2_new: RevisionTimeData.timeticket_end_nt_2_new,

      timeticket_start_ent_1_old: RevisionTimeData.timeticket_start_ent_1_old,
      timeticket_start_ent_1_new: RevisionTimeData.timeticket_start_ent_1_new,

      timeticket_end_ent_1_old: RevisionTimeData.timeticket_end_ent_1_old,
      timeticket_end_ent_1_new: RevisionTimeData.timeticket_end_ent_1_new,

      timeticket_start_et_2_old: RevisionTimeData.timeticket_start_et_2_old,
      timeticket_start_et_2_new: RevisionTimeData.timeticket_start_et_2_new,

      timeticket_end_et_2_old: RevisionTimeData.timeticket_end_et_2_old,
      timeticket_end_et_2_new: RevisionTimeData.timeticket_end_et_2_new,

      timeticket_start_ot_old: RevisionTimeData.timeticket_start_ot_old,
      timeticket_start_ot_new: RevisionTimeData.timeticket_start_ot_new,

      timeticket_end_ot_old: RevisionTimeData.timeticket_end_ot_old,
      timeticket_end_ot_new: RevisionTimeData.timeticket_end_ot_new,

      document_status_uuid: documentStatusComplete.document_status_uuid,
      remark_nt_1: RevisionTimeData.remark_nt_1,
      remark_nt_2: RevisionTimeData.remark_nt_2,
      remark_ent_1: RevisionTimeData.remark_ent_1,
      remark_et_2: RevisionTimeData.remark_et_2,
      remark_ot: RevisionTimeData.remark_ot,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let completeRevitionTimeTransTable = async (req) => {
  try {
    var updateRevisionTime = await model.edit(req);

    var updateTimeticket = await Timeticketmodel.revisiontime(req);

    return { updateRevisionTime, updateTimeticket };
  } catch (e) {
    throw new Error(e.message);
  }
};

let cancelRevitionTimeTransTable = async (req) => {
  try {
    var cancelRevitionTimeTransTable = await model.edit(req);
    req.body["remark"] = "-";
    var CreateRejectTrans = await rejectTransModel.create(req);
    if (cancelRevitionTimeTransTable == null) {
      throw new Error(e.message);
    }
    if (CreateRejectTrans == null) {
      throw new Error(e.message);
    }
    return { cancelRevitionTimeTransTable, CreateRejectTrans };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getRevisionTimeTransTableList,
  getRevisionTimeTransTableById,
  createRevisionTimeTransTable,
  editRevisionTimeTransTable,
  deleteRevisionTimeTransTable,
  getRevisionTimeTransDropdown,
  postRevisionTime,
  getInitialDataRevisionTimeTransTable,
  getPostInitialData,
  getCancelInitialData,
  completeRevitionTimeTransTable,
  getCompleteInitialData,
  cancelRevitionTimeTransTable,
};
