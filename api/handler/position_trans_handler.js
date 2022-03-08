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
    keyList.push("employee_uuid");
    keyList.push("department_uuid");
    keyList.push("remark");
    keyList.push("position_trans_date");
    keyList.push("position_new");
    keyList.push("position_old");
    keyList.push("document_status_uuid");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("effective_date");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("position_trans_uuid");
    keyList.push("employee_uuid");
    keyList.push("department_uuid");
    keyList.push("remark");
    keyList.push("position_trans_date");
    keyList.push("position_new");
    keyList.push("position_old");
    keyList.push("document_status_uuid");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("effective_date");
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
      "INSERT INTO position_trans_table (" +
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
    return "UPDATE position_trans_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE position_trans_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_position_trans_table_dropdown " +
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
      "UPDATE position_trans_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE position_trans_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_position_trans_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_position_trans_table_item WHERE position_trans_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlRequestList = (documentStatus, req) => {
  try {
    return (
      "SELECT * FROM vw_position_trans_table_list " +
      mTools.getCondition(req) +
      " AND  document_status_uuid = " +
      "'" +
      documentStatus.document_status_uuid +
      "'"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.remark);
    valuelist.push(mTools.toDateCurrectFormat(data.position_trans_date));
    valuelist.push(data.position_new);
    valuelist.push(data.position_old);
    valuelist.pust(data.document_status_uuid);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(mTools.toDateCurrectFormat(data.effective_date));
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
    valuelist.push(data.position_trans_uuid);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.remark);
    valuelist.push(mTools.toDateCurrectFormat(data.position_trans_date));
    valuelist.push(data.position_new);
    valuelist.push(data.position_old);
    valuelist.push(data.document_status_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(mTools.toDateCurrectFormat(data.effective_date));
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.remark = req.body["remark"];
    model.position_trans_date = req.body["position_trans_date"];
    model.position_new = req.body["position_new"];
    model.position_old = req.body["position_old"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.effective_date = req.body["effective_date"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["position_trans_uuid"];
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
    model.position_trans_uuid = req.body["position_trans_uuid"];
    model.employee_uuid = req.body["employee_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.remark = req.body["remark"];
    model.position_trans_date = req.body["position_trans_date"];
    model.position_new = req.body["position_new"];
    model.position_old = req.body["position_old"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.effective_date = req.body["effective_date"];
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
  getSqlRequestList,
};
