const mTools = require("../shared/tools/tools");
let getIndexCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getIndexEdit = (model) => {
  try {
    var data = toEditModel(model);
    let indexList = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysCreate = (model) => {
  try {
    let keyList = [];
    keyList.push("timeticket_trans_time");
    keyList.push("timeticket_trans_date");
    keyList.push("employee_uuid");
    keyList.push("note");
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
let getKeysEdit = (model) => {
  try {
    let keyList = [];
    keyList.push("timeticket_trans_time");
    keyList.push("timeticket_trans_date");
    keyList.push("employee_uuid");
    keyList.push("note");
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
let getSqlCreate = (model) => {
  try {
    const keys = getKeysCreate(model);
    const index = getIndexCreate(model);
    return (
      "INSERT INTO timeticket_trans_table (" +
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
    return "UPDATE timeticket_trans_table SET ( is_active , update_date ) = ( $1 , $2 ) WHERE timeticket_trans_uuid = $3 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_timeticket_trans_table_dropdown " +
      mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (model) => {
  try {
    const keys = getKeysEdit(model);
    const index = getIndexEdit(model);
    return (
      "UPDATE timeticket_trans_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE timeticket_trans_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_timeticket_trans_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_timeticket_trans_table_item WHERE timeticket_trans_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.timeticket_trans_time);
    valuelist.push(data.timeticket_trans_date);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.note);
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
    valuelist.push(data.timeticket_trans_time);
    valuelist.push(data.timeticket_trans_date);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.note);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (modelView) => {
  try {
    var model = {};
    model.timeticket_trans_time = modelView["timeticket_trans_time"];
    model.timeticket_trans_date = modelView["timeticket_trans_date"];
    model.employee_uuid = modelView["employee_uuid"];
    model.note = modelView["note"];
    model.company_uuid = modelView["company_uuid"];
    model.branch_uuid = modelView["branch_uuid"];
    model.is_active = modelView["is_active"];
    model.create_by = modelView["create_by"];
    model.create_date = modelView["create_date"];
    model.ref_uuid = modelView["ref_uuid"];
    model.ref_type = modelView["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["timeticket_trans_uuid"];
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
    return model["1"] + " - " + model["2"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (modelView) => {
  try {
    var model = {};
    model.timeticket_trans_time = modelView["timeticket_trans_time"];
    model.timeticket_trans_date = modelView["timeticket_trans_date"];
    model.employee_uuid = modelView["employee_uuid"];
    model.note = modelView["note"];
    model.update_by = modelView["update_by"];
    model.update_date = modelView["update_date"];
    model.ref_uuid = modelView["ref_uuid"];
    model.ref_type = modelView["ref_type"];
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
