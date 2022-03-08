const mTools = require("../shared/tools/tools");
const mAuth = require("../services/authen_services");
let getIndexCreate = (req) => {
  try {
    var data = toCreateModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEdit = (req) => {
  try {
    var data = toEditModel(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysCreate = (req) => {
  try {
    let keyList = [];
    keyList.push("date");
    keyList.push("document_status_uuid");
    keyList.push("timeticket_start_nt_1_new");
    keyList.push("timeticket_end_nt_1_new");
    keyList.push("timeticket_start_nt_1_old");
    keyList.push("timeticket_end_nt_1_old");
    keyList.push("remark_nt_1");
    keyList.push("timeticket_start_nt_2_new");
    keyList.push("timeticket_end_nt_2_new");
    keyList.push("timeticket_start_nt_2_old");
    keyList.push("timeticket_end_nt_2_old");
    keyList.push("remark_nt_2");
    keyList.push("timeticket_start_ent_1_new");
    keyList.push("timeticket_end_ent_1_new");
    keyList.push("timeticket_start_ent_1_old");
    keyList.push("timeticket_end_ent_1_old");
    keyList.push("remark_ent_1");
    keyList.push("timeticket_start_et_2_new");
    keyList.push("timeticket_end_et_2_new");
    keyList.push("timeticket_start_et_2_old");
    keyList.push("timeticket_end_et_2_old");
    keyList.push("remark_et_2");
    keyList.push("timeticket_start_ot_new");
    keyList.push("timeticket_end_ot_new");
    keyList.push("timeticket_start_ot_old");
    keyList.push("timeticket_end_ot_old");
    keyList.push("remark_ot");
    keyList.push("employee_uuid");
    keyList.push("timeticket_uuid");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("revision_time_uuid");
    keyList.push("date");
    keyList.push("document_status_uuid");
    keyList.push("timeticket_start_nt_1_new");
    keyList.push("timeticket_end_nt_1_new");
    keyList.push("timeticket_start_nt_1_old");
    keyList.push("timeticket_end_nt_1_old");
    keyList.push("remark_nt_1");
    keyList.push("timeticket_start_nt_2_new");
    keyList.push("timeticket_end_nt_2_new");
    keyList.push("timeticket_start_nt_2_old");
    keyList.push("timeticket_end_nt_2_old");
    keyList.push("remark_nt_2");
    keyList.push("timeticket_start_ent_1_new");
    keyList.push("timeticket_end_ent_1_new");
    keyList.push("timeticket_start_ent_1_old");
    keyList.push("timeticket_end_ent_1_old");
    keyList.push("remark_ent_1");
    keyList.push("timeticket_start_et_2_new");
    keyList.push("timeticket_end_et_2_new");
    keyList.push("timeticket_start_et_2_old");
    keyList.push("timeticket_end_et_2_old");
    keyList.push("remark_et_2");
    keyList.push("timeticket_start_ot_new");
    keyList.push("timeticket_end_ot_new");
    keyList.push("timeticket_start_ot_old");
    keyList.push("timeticket_end_ot_old");
    keyList.push("remark_ot");
    keyList.push("employee_uuid");
    keyList.push("timeticket_uuid");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getRoWAuth = (list) => {
  list.forEach((element) => {
    element["rowAuthorize"] = 4;
  });
};
let getSqlCreate = (req) => {
  try {
    const keys = getKeysCreate(req);
    const index = getIndexCreate(req);
    return (
      "INSERT INTO revision_time_trans_table (" +
      keys +
      ") values (" +
      index +
      ") RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDelete = (model) => {
  try {
    return "UPDATE revision_time_trans_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE revision_time_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_revision_time_trans_table_dropdown " +
      mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (req) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);
    return (
      "UPDATE revision_time_trans_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE revision_time_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_revision_time_trans_table_list " +
      mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_revision_time_trans_table_item WHERE revision_time_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(mTools.toDateCurrectFormat(data.date));
    valuelist.push(data.document_status_uuid);
    valuelist.push(data.timeticket_start_nt_1_new);
    valuelist.push(data.timeticket_end_nt_1_new);
    valuelist.push(data.timeticket_start_nt_1_old);
    valuelist.push(data.timeticket_end_nt_1_old);
    valuelist.push(data.remark_nt_1);
    valuelist.push(data.timeticket_start_nt_2_new);
    valuelist.push(data.timeticket_end_nt_2_new);
    valuelist.push(data.timeticket_start_nt_2_old);
    valuelist.push(data.timeticket_end_nt_2_old);
    valuelist.push(data.remark_nt_2);
    valuelist.push(data.timeticket_start_ent_1_new);
    valuelist.push(data.timeticket_end_ent_1_new);
    valuelist.push(data.timeticket_start_ent_1_old);
    valuelist.push(data.timeticket_end_ent_1_old);
    valuelist.push(data.remark_ent_1);
    valuelist.push(data.timeticket_start_et_2_new);
    valuelist.push(data.timeticket_end_et_2_new);
    valuelist.push(data.timeticket_start_et_2_old);
    valuelist.push(data.timeticket_end_et_2_old);
    valuelist.push(data.remark_et_2);
    valuelist.push(data.timeticket_start_ot_new);
    valuelist.push(data.timeticket_end_ot_new);
    valuelist.push(data.timeticket_start_ot_old);
    valuelist.push(data.timeticket_end_ot_old);
    valuelist.push(data.remark_ot);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.timeticket_uuid);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesDelete = (req) => {
  try {
    const update_date = new Date().toISOString();
    const key = req.body.primaryKey;
    let valuelist = [];
    valuelist.push(false);
    valuelist.push(mAuth.getUserNameFromToken(req));
    valuelist.push(update_date);
    valuelist.push(key);
    return valuelist;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesEdit = (model) => {
  try {
    var data = toEditModel(model);
    let valuelist = [];
    valuelist.push(data.revision_time_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.date));
    valuelist.push(data.document_status_uuid);
    valuelist.push(data.timeticket_start_nt_1_new);
    valuelist.push(data.timeticket_end_nt_1_new);
    valuelist.push(data.timeticket_start_nt_1_old);
    valuelist.push(data.timeticket_end_nt_1_old);
    valuelist.push(data.remark_nt_1);
    valuelist.push(data.timeticket_start_nt_2_new);
    valuelist.push(data.timeticket_end_nt_2_new);
    valuelist.push(data.timeticket_start_nt_2_old);
    valuelist.push(data.timeticket_end_nt_2_old);
    valuelist.push(data.remark_nt_2);
    valuelist.push(data.timeticket_start_ent_1_new);
    valuelist.push(data.timeticket_end_ent_1_new);
    valuelist.push(data.timeticket_start_ent_1_old);
    valuelist.push(data.timeticket_end_ent_1_old);
    valuelist.push(data.remark_ent_1);
    valuelist.push(data.timeticket_start_et_2_new);
    valuelist.push(data.timeticket_end_et_2_new);
    valuelist.push(data.timeticket_start_et_2_old);
    valuelist.push(data.timeticket_end_et_2_old);
    valuelist.push(data.remark_et_2);
    valuelist.push(data.timeticket_start_ot_new);
    valuelist.push(data.timeticket_end_ot_new);
    valuelist.push(data.timeticket_start_ot_old);
    valuelist.push(data.timeticket_end_ot_old);
    valuelist.push(data.remark_ot);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.timeticket_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.date = req.body["date"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.timeticket_start_nt_1_new = req.body["timeticket_start_nt_1_new"];
    model.timeticket_end_nt_1_new = req.body["timeticket_end_nt_1_new"];
    model.timeticket_start_nt_1_old = req.body["timeticket_start_nt_1_old"];
    model.timeticket_end_nt_1_old = req.body["timeticket_end_nt_1_old"];
    model.remark_nt_1 = req.body["remark_nt_1"];
    model.timeticket_start_nt_2_new = req.body["timeticket_start_nt_2_new"];
    model.timeticket_end_nt_2_new = req.body["timeticket_end_nt_2_new"];
    model.timeticket_start_nt_2_old = req.body["timeticket_start_nt_2_old"];
    model.timeticket_end_nt_2_old = req.body["timeticket_end_nt_2_old"];
    model.remark_nt_2 = req.body["remark_nt_2"];
    model.timeticket_start_ent_1_new = req.body["timeticket_start_ent_1_new"];
    model.timeticket_end_ent_1_new = req.body["timeticket_end_ent_1_new"];
    model.timeticket_start_ent_1_old = req.body["timeticket_start_ent_1_old"];
    model.timeticket_end_ent_1_old = req.body["timeticket_end_ent_1_old"];
    model.remark_ent_1 = req.body["remark_ent_1"];
    model.timeticket_start_et_2_new = req.body["timeticket_start_et_2_new"];
    model.timeticket_end_et_2_new = req.body["timeticket_end_et_2_new"];
    model.timeticket_start_et_2_old = req.body["timeticket_start_et_2_old"];
    model.timeticket_end_et_2_old = req.body["timeticket_end_et_2_old"];
    model.remark_et_2 = req.body["remark_et_2"];
    model.timeticket_start_ot_new = req.body["timeticket_start_ot_new"];
    model.timeticket_end_ot_new = req.body["timeticket_end_ot_new"];
    model.timeticket_start_ot_old = req.body["timeticket_start_ot_old"];
    model.timeticket_end_ot_old = req.body["timeticket_end_ot_old"];
    model.remark_ot = req.body["remark_ot"];
    model.employee_uuid = req.body["employee_uuid"];
    model.timeticket_uuid = req.body["timeticket_uuid"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["revision_time_uuid"];
      let label = getLabel(model);
      let rowData = model;
      let dropdownModel = {
        value: value,
        label: label,
        rowData: rowData,
      };
      optionList.push(dropdownModel);
    });
    return optionList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getLabel = (model) => {
  try {
    return model[""] + " - " + model[""];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.revision_time_uuid = req.body["revision_time_uuid"];
    model.date = req.body["date"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.timeticket_start_nt_1_new = req.body["timeticket_start_nt_1_new"];
    model.timeticket_end_nt_1_new = req.body["timeticket_end_nt_1_new"];
    model.timeticket_start_nt_1_old = req.body["timeticket_start_nt_1_old"];
    model.timeticket_end_nt_1_old = req.body["timeticket_end_nt_1_old"];
    model.remark_nt_1 = req.body["remark_nt_1"];
    model.timeticket_start_nt_2_new = req.body["timeticket_start_nt_2_new"];
    model.timeticket_end_nt_2_new = req.body["timeticket_end_nt_2_new"];
    model.timeticket_start_nt_2_old = req.body["timeticket_start_nt_2_old"];
    model.timeticket_end_nt_2_old = req.body["timeticket_end_nt_2_old"];
    model.remark_nt_2 = req.body["remark_nt_2"];
    model.timeticket_start_ent_1_new = req.body["timeticket_start_ent_1_new"];
    model.timeticket_end_ent_1_new = req.body["timeticket_end_ent_1_new"];
    model.timeticket_start_ent_1_old = req.body["timeticket_start_ent_1_old"];
    model.timeticket_end_ent_1_old = req.body["timeticket_end_ent_1_old"];
    model.remark_ent_1 = req.body["remark_ent_1"];
    model.timeticket_start_et_2_new = req.body["timeticket_start_et_2_new"];
    model.timeticket_end_et_2_new = req.body["timeticket_end_et_2_new"];
    model.timeticket_start_et_2_old = req.body["timeticket_start_et_2_old"];
    model.timeticket_end_et_2_old = req.body["timeticket_end_et_2_old"];
    model.remark_et_2 = req.body["remark_et_2"];
    model.timeticket_start_ot_new = req.body["timeticket_start_ot_new"];
    model.timeticket_end_ot_new = req.body["timeticket_end_ot_new"];
    model.timeticket_start_ot_old = req.body["timeticket_start_ot_old"];
    model.timeticket_end_ot_old = req.body["timeticket_end_ot_old"];
    model.remark_ot = req.body["remark_ot"];
    model.employee_uuid = req.body["employee_uuid"];
    model.timeticket_uuid = req.body["timeticket_uuid"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  toDropdown,
  getKeysEdit,
  getValuesEdit,
  getIndexEdit,
  getKeysCreate,
  getValuesCreate,
  getValuesDelete,
  getIndexCreate,
  getSqlCreate,
  getSqlEdit,
  getSqlList,
  getSqlDelete,
  getSqlView,
  getSqlDropdown,
  getRoWAuth,
};
