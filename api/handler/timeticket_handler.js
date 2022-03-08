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
    keyList.push("employee_uuid");
    keyList.push("department_uuid");
    keyList.push("position_uuid");
    keyList.push("employee_status");
    keyList.push("timeticket_start_nt_1");
    keyList.push("timeticket_end_nt_1");
    keyList.push("remark_nt_1");
    keyList.push("timeticket_start_nt_2");
    keyList.push("timeticket_end_nt_2");
    keyList.push("remark_nt_2");
    keyList.push("timeticket_start_et_1");
    keyList.push("timeticket_end_et_1");
    keyList.push("remark_et_1");
    keyList.push("timeticket_start_et_2");
    keyList.push("timeticket_end_et_2");
    keyList.push("remark_et_2");
    keyList.push("timeticket_start_ot");
    keyList.push("timeticket_end_ot");
    keyList.push("remark_ot");
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
    keyList.push("timeticket_uuid");
    keyList.push("date");
    keyList.push("employee_uuid");
    keyList.push("department_uuid");
    keyList.push("position_uuid");
    keyList.push("employee_status");
    keyList.push("timeticket_start_nt_1");
    keyList.push("timeticket_end_nt_1");
    keyList.push("remark_nt_1");
    keyList.push("timeticket_start_nt_2");
    keyList.push("timeticket_end_nt_2");
    keyList.push("remark_nt_2");
    keyList.push("timeticket_start_et_1");
    keyList.push("timeticket_end_et_1");
    keyList.push("remark_et_1");
    keyList.push("timeticket_start_et_2");
    keyList.push("timeticket_end_et_2");
    keyList.push("remark_et_2");
    keyList.push("timeticket_start_ot");
    keyList.push("timeticket_end_ot");
    keyList.push("remark_ot");
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
      "INSERT INTO timeticket_table (" +
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
    return "UPDATE timeticket_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE timeticket_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_timeticket_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE timeticket_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE timeticket_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_timeticket_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_timeticket_table_item WHERE timeticket_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(mTools.toDateCurrectFormat(data.date));
    valuelist.push(data.employee_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.timeticket_start_nt_1);
    valuelist.push(data.timeticket_end_nt_1);
    valuelist.push(data.remark_nt_1);
    valuelist.push(data.timeticket_start_nt_2);
    valuelist.push(data.timeticket_end_nt_2);
    valuelist.push(data.remark_nt_2);
    valuelist.push(data.timeticket_start_et_1);
    valuelist.push(data.timeticket_end_et_1);
    valuelist.push(data.remark_et_1);
    valuelist.push(data.timeticket_start_et_2);
    valuelist.push(data.timeticket_end_et_2);
    valuelist.push(data.remark_et_2);
    valuelist.push(data.timeticket_start_ot);
    valuelist.push(data.timeticket_end_ot);
    valuelist.push(data.remark_ot);
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
    valuelist.push(data.timeticket_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.date));
    valuelist.push(data.employee_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.employee_status);
    valuelist.push(data.timeticket_start_nt_1);
    valuelist.push(data.timeticket_end_nt_1);
    valuelist.push(data.remark_nt_1);
    valuelist.push(data.timeticket_start_nt_2);
    valuelist.push(data.timeticket_end_nt_2);
    valuelist.push(data.remark_nt_2);
    valuelist.push(data.timeticket_start_et_1);
    valuelist.push(data.timeticket_end_et_1);
    valuelist.push(data.remark_et_1);
    valuelist.push(data.timeticket_start_et_2);
    valuelist.push(data.timeticket_end_et_2);
    valuelist.push(data.remark_et_2);
    valuelist.push(data.timeticket_start_ot);
    valuelist.push(data.timeticket_end_ot);
    valuelist.push(data.remark_ot);
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
    model.employee_uuid = req.body["employee_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.position_uuid = req.body["position_uuid"];
    model.employee_status = req.body["employee_status"];
    model.timeticket_start_nt_1 = req.body["timeticket_start_nt_1"];
    model.timeticket_end_nt_1 = req.body["timeticket_end_nt_1"];
    model.remark_nt_1 = req.body["remark_nt_1"];
    model.timeticket_start_nt_2 = req.body["timeticket_start_nt_2"];
    model.timeticket_end_nt_2 = req.body["timeticket_end_nt_2"];
    model.remark_nt_2 = req.body["remark_nt_2"];
    model.timeticket_start_et_1 = req.body["timeticket_start_et_1"];
    model.timeticket_end_et_1 = req.body["timeticket_end_et_1"];
    model.remark_et_1 = req.body["remark_et_1"];
    model.timeticket_start_et_2 = req.body["timeticket_start_et_2"];
    model.timeticket_end_et_2 = req.body["timeticket_end_et_2"];
    model.remark_et_2 = req.body["remark_et_2"];
    model.timeticket_start_ot = req.body["timeticket_start_ot"];
    model.timeticket_end_ot = req.body["timeticket_end_ot"];
    model.remark_ot = req.body["remark_ot"];
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
      let value = model["timeticket_uuid"];
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
    return model["employee_uuid"] + " - " + model[""];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.timeticket_uuid = req.body["timeticket_uuid"];
    model.date = req.body["date"];
    model.employee_uuid = req.body["employee_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.position_uuid = req.body["position_uuid"];
    model.employee_status = req.body["employee_status"];
    model.timeticket_start_nt_1 = req.body["timeticket_start_nt_1"];
    model.timeticket_end_nt_1 = req.body["timeticket_end_nt_1"];
    model.remark_nt_1 = req.body["remark_nt_1"];
    model.timeticket_start_nt_2 = req.body["timeticket_start_nt_2"];
    model.timeticket_end_nt_2 = req.body["timeticket_end_nt_2"];
    model.remark_nt_2 = req.body["remark_nt_2"];
    model.timeticket_start_et_1 = req.body["timeticket_start_et_1"];
    model.timeticket_end_et_1 = req.body["timeticket_end_et_1"];
    model.remark_et_1 = req.body["remark_et_1"];
    model.timeticket_start_et_2 = req.body["timeticket_start_et_2"];
    model.timeticket_end_et_2 = req.body["timeticket_end_et_2"];
    model.remark_et_2 = req.body["remark_et_2"];
    model.timeticket_start_ot = req.body["timeticket_start_ot"];
    model.timeticket_end_ot = req.body["timeticket_end_ot"];
    model.remark_ot = req.body["remark_ot"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getSqlEditrevisiontime = (req) => {
  try {
    const keys = getKeysEditrevisiontime(req);
    const index = getIndexEditrevisiontime(req);

    return (
      "UPDATE timeticket_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE timeticket_uuid = '" +
      req.body.timeticket_uuid +
      "' RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

let getKeysEditrevisiontime = (req) => {
  try {
    let keyList = [];
    keyList.push("timeticket_start_nt_1");
    keyList.push("timeticket_end_nt_1");
    keyList.push("remark_nt_1");
    keyList.push("timeticket_start_nt_2");
    keyList.push("timeticket_end_nt_2");
    keyList.push("remark_nt_2");
    keyList.push("timeticket_start_et_1");
    keyList.push("timeticket_end_et_1");
    keyList.push("remark_et_1");
    keyList.push("timeticket_start_et_2");
    keyList.push("timeticket_end_et_2");
    keyList.push("remark_et_2");
    keyList.push("timeticket_start_ot");
    keyList.push("timeticket_end_ot");
    keyList.push("remark_ot");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEditrevisiontime = (req) => {
  try {
    var data = toEditModelrevisiontime(req);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModelrevisiontime = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    var timeticket_start_nt_1_new = req.body["timeticket_start_nt_1_new"];
    var timeticket_start_nt_1_old = req.body["timeticket_start_nt_1_old"];
    var timeticket_end_nt_1_new = req.body["timeticket_end_nt_1_new"];
    var timeticket_end_nt_1_old = req.body["timeticket_end_nt_1_old"];

    var timeticket_start_nt_2_new = req.body["timeticket_start_nt_2_new"];
    var timeticket_start_nt_2_old = req.body["timeticket_start_nt_2_old"];
    var timeticket_end_nt_2_new = req.body["timeticket_end_nt_2_new"];
    var timeticket_end_nt_2_old = req.body["timeticket_end_nt_2_old"];

    var timeticket_start_ent_1_new = req.body["timeticket_start_ent_1_new"];
    var timeticket_start_ent_1_old = req.body["timeticket_start_ent_1_old"];
    var timeticket_end_ent_1_new = req.body["timeticket_end_ent_1_new"];
    var timeticket_end_ent_1_old = req.body["timeticket_end_ent_1_old"];

    var timeticket_start_et_2_new = req.body["timeticket_start_et_2_new"];
    var timeticket_start_et_2_old = req.body["timeticket_start_et_2_old"];
    var timeticket_end_et_2_new = req.body["timeticket_end_et_2_new"];
    var timeticket_end_et_2_old = req.body["timeticket_end_et_2_old"];

    var timeticket_end_ot_new = req.body["timeticket_end_ot_new"];
    var timeticket_end_ot_old = req.body["timeticket_end_ot_old"];
    var timeticket_start_ot_old = req.body["timeticket_start_ot_old"];
    var timeticket_start_ot_new = req.body["timeticket_start_ot_new"];

    if (
      timeticket_start_nt_1_new == null &&
      timeticket_start_nt_1_old != null
    ) {
      timeticket_start_nt_1_new = timeticket_start_nt_1_old;
    }
    if (timeticket_end_nt_1_new == null && timeticket_end_nt_1_old != null) {
      timeticket_end_nt_1_new = timeticket_end_nt_1_old;
    }
    if (
      timeticket_start_nt_2_new == null &&
      timeticket_start_nt_2_old != null
    ) {
      timeticket_start_nt_2_new = timeticket_start_nt_2_old;
    }
    if (timeticket_end_nt_2_new == null && timeticket_end_nt_2_old != null) {
      timeticket_end_nt_2_new = timeticket_end_nt_2_old;
    }
    if (
      timeticket_start_ent_1_new == null &&
      timeticket_start_ent_1_old != null
    ) {
      timeticket_start_ent_1_new = timeticket_start_ent_1_old;
    }
    if (timeticket_end_ent_1_new == null && timeticket_end_ent_1_old != null) {
      timeticket_end_ent_1_new = timeticket_end_ent_1_old;
    }
    if (timeticket_end_et_2_new == null && timeticket_end_et_2_old != null) {
      timeticket_end_et_2_new = timeticket_end_et_2_old;
    }
    if (
      timeticket_start_et_2_new == null &&
      timeticket_start_et_2_old != null
    ) {
      timeticket_start_et_2_new = timeticket_start_et_2_old;
    }
    if (timeticket_end_ot_new == null && timeticket_end_ot_old != null) {
      timeticket_end_ot_new = timeticket_end_ot_old;
    }
    if (timeticket_start_ot_new == null && timeticket_start_ot_old != null) {
      timeticket_start_ot_new = timeticket_start_ot_old;
    }
    model.timeticket_start_nt_1 = timeticket_start_nt_1_new;
    model.timeticket_end_nt_1 = timeticket_end_nt_1_new;
    model.remark_nt_1 = req.body["remark_nt_1"];
    model.timeticket_start_nt_2 = timeticket_start_nt_2_new;
    model.timeticket_end_nt_2 = timeticket_end_nt_2_new;
    model.remark_nt_2 = req.body["remark_nt_2"];
    model.timeticket_start_et_1 = timeticket_start_ent_1_new;
    model.timeticket_end_et_1 = timeticket_end_ent_1_new;
    model.remark_et_1 = req.body["remark_ent_1"];
    model.timeticket_start_et_2 = timeticket_start_et_2_new;
    model.timeticket_end_et_2 = timeticket_end_et_2_new;
    model.remark_et_2 = req.body["remark_et_2"];
    model.timeticket_start_ot = timeticket_start_ot_new;
    model.timeticket_end_ot = timeticket_end_ot_new;
    model.remark_ot = req.body["remark_ot"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getValuesEditrevisiontime = (model) => {
  try {
    var data = toEditModelrevisiontime(model);
    let valuelist = [];
    valuelist.push(data.timeticket_start_nt_1);
    valuelist.push(data.timeticket_end_nt_1);
    valuelist.push(data.remark_nt_1);
    valuelist.push(data.timeticket_start_nt_2);
    valuelist.push(data.timeticket_end_nt_2);
    valuelist.push(data.remark_nt_2);
    valuelist.push(data.timeticket_start_et_1);
    valuelist.push(data.timeticket_end_et_1);
    valuelist.push(data.remark_et_1);
    valuelist.push(data.timeticket_start_et_2);
    valuelist.push(data.timeticket_end_et_2);
    valuelist.push(data.remark_et_2);
    valuelist.push(data.timeticket_start_ot);
    valuelist.push(data.timeticket_end_ot);
    valuelist.push(data.remark_ot);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
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
  getSqlEditrevisiontime,
  getIndexEditrevisiontime,
  getValuesEditrevisiontime,
  toEditModelrevisiontime,
};
