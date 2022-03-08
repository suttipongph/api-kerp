const model = require("../model/reject_trans_model");
const ProbationTransModel = require("../model/probation_trans_model");
const PositionTransModel = require("../model/position_trans_model");
const SalaryTransModel = require("../model/salary_trans_model");
const ResignTransModel = require("../model/resign_model");
const LeaveTransModel = require("../model/leave_trans_model");
const OvertimeTransModel = require("../model/overtime_model");
const RevisiontimeTransModel = require("../model/revision_time_trans_model");
const TransferTransModel = require("../model/transfer_trans_model");
const {
  RefType,
  EMPLOYEE_STATUS,
} = require("../shared/constants/enumConstants");

let createRejectTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRejectTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editRejectTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteRejectTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRejectTransTableById = async (req) => {
  try {
    var reject = await model.view(req);

    if (reject.ref_type === RefType.PROBATION_TANS) {
      var LOOKUP = await ProbationTransModel.lookup_ordering(reject.ref_uuid);
      var Status = LOOKUP.employee_status;

      var value = LOOKUP.employee_value + " - " + EMPLOYEE_STATUS[Status];
    }
    if (reject.ref_type === RefType.PROSITION_TANS) {
      LOOKUP = await PositionTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.employee_value + " - " + LOOKUP.department_value;
    }
    if (reject.ref_type === RefType.SALARY_TRANS) {
      LOOKUP = await SalaryTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.position_value + " - " + LOOKUP.employee_value;
    }
    if (reject.ref_type === RefType.Resign) {
      LOOKUP = await ResignTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.employee_value + " - " + LOOKUP.department_value;
    }

    if (reject.ref_type === RefType.TRANSFER_TRANS) {
      LOOKUP = await TransferTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.position_old_value + " - " + LOOKUP.employee_value;
    }

    if (reject.ref_type === RefType.LEAVE_TRANS) {
      LOOKUP = await LeaveTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.employee_value + " - " + LOOKUP.leave_trans_name;
    }
    if (reject.ref_type === RefType.OVER_TIME) {
      LOOKUP = await OvertimeTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.employee_value + " - " + LOOKUP.department_value;
    }
    if (reject.ref_type === RefType.REVISION_TIME) {
      LOOKUP = await RevisiontimeTransModel.lookup_ordering(reject.ref_uuid);

      value = LOOKUP.employee_value;
    }
    return {
      reject_trans_uuid: reject.reject_trans_uuid,
      description: reject.description,
      remark: reject.remark,
      ref_id: value,
      ref_type: reject.ref_type,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRejectTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getRejectTransTableList,
  getRejectTransTableById,
  createRejectTransTable,
  editRejectTransTable,
  deleteRejectTransTable,
  getRejectTransDropdown,
};
