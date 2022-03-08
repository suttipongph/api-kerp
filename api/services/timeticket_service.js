const model = require("../model/timeticket_model");
const Emp = require("../model/employee_model");
const mTools = require("../shared/tools/tools");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  RevisionTimeDocumentStatus,
} = require("../shared/constants/documentStatusId");
let createTimeticketTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editTimeticketTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteTimeticketTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTimeticketInitialData = async (req) => {
  try {
    const EmpModel = await Emp.view(req);
    const currentDate = mTools.getTHBEdate(new Date());
    return {
      employee_uuid: EmpModel.employee_uuid,
      position_uuid: EmpModel.position_uuid,
      department_uuid: EmpModel.department_uuid,
      employee_status: EmpModel.employee_status,
      date: currentDate,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

let importTimticket = async (req) => {
  try {
    return await model.importTimticket(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRequestRevitionTimeTableById = async (req) => {
  try {
    const Timeticket = await model.view(req);
    var ref_type = RefType.REVISION_TIME;
    var statusId = RevisionTimeDocumentStatus.Draft;
    var documentStatusDraft =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);
    return {
      timeticket_uuid: Timeticket.timeticket_uuid,
      employee_uuid: Timeticket.employee_uuid,
      position_uuid: Timeticket.position_uuid,
      department_uuid: Timeticket.department_uuid,
      employee_status: Timeticket.employee_status,
      date: Timeticket.date,
      timeticket_start_nt_1_old: Timeticket.timeticket_start_nt_1,
      timeticket_end_nt_1_old: Timeticket.timeticket_end_nt_1,
      timeticket_start_nt_2_old: Timeticket.timeticket_start_nt_2,
      timeticket_end_nt_2_old: Timeticket.timeticket_end_nt_2,
      timeticket_start_ent_1_old: Timeticket.timeticket_start_et_1,
      timeticket_end_ent_1_old: Timeticket.timeticket_end_et_1,
      timeticket_start_et_2_old: Timeticket.timeticket_start_et_2,
      timeticket_end_et_2_old: Timeticket.timeticket_end_et_2,
      timeticket_start_ot_old: Timeticket.timeticket_start_ot,
      timeticket_end_ot_old: Timeticket.timeticket_end_ot,
      document_status_uuid: documentStatusDraft.document_status_uuid,
      remark_nt_1: Timeticket.remark_nt_1,
      remark_nt_2: Timeticket.remark_nt_2,
      remark_ent_1: Timeticket.remark_et_1,
      remark_et_2: Timeticket.remark_et_2,
      remark_ot: Timeticket.remark_ot,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getTimeticketTableList,
  getTimeticketTableById,
  createTimeticketTable,
  editTimeticketTable,
  deleteTimeticketTable,
  getTimeticketDropdown,
  getTimeticketInitialData,
  getRequestRevitionTimeTableById,
  importTimticket,
};
