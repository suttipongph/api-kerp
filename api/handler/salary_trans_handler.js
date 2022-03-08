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
    keyList.push("position_uuid");
    keyList.push("department_uuid");
    keyList.push("employee_uuid");
    keyList.push("remark");
    keyList.push("salary_trans_date");
    keyList.push("salary_uuid");
    keyList.push("salary_new");
    keyList.push("salary_old");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("effective_date");
    keyList.push("document_status_uuid");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("salary_trans_uuid");
    keyList.push("position_uuid");
    keyList.push("department_uuid");
    keyList.push("employee_uuid");
    keyList.push("remark");
    keyList.push("salary_trans_date");
    keyList.push("salary_uuid");
    keyList.push("salary_new");
    keyList.push("salary_old");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("effective_date");
    keyList.push("document_status_uuid");
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
      "INSERT INTO salary_trans_table (" +
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
    return "UPDATE salary_trans_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE salary_trans_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_salary_trans_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE salary_trans_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE salary_trans_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_salary_trans_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_salary_trans_table_item WHERE salary_trans_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.position_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.salary_trans_date);
    valuelist.push(data.salary_uuid);
    valuelist.push(data.salary_new);
    valuelist.push(data.salary_old);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.effective_date);
    valuelist.push(data.document_status_uuid);
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
    valuelist.push(data.salary_trans_uuid);
    valuelist.push(data.position_uuid);
    valuelist.push(data.department_uuid);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.salary_trans_date);
    valuelist.push(data.salary_uuid);
    valuelist.push(data.salary_new);
    valuelist.push(data.salary_old);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.effective_date);
    valuelist.push(data.document_status_uuid);

    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.position_uuid = req.body["position_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.employee_uuid = req.body["employee_uuid"];
    model.remark = req.body["remark"];
    model.salary_trans_date = mTools.toDateCurrectFormat(
      req.body["salary_trans_date"]
    );
    model.salary_uuid = req.body["salary_uuid"];
    model.salary_new = req.body["salary_new"];
    model.salary_old = req.body["salary_old"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.effective_date = mTools.toDateCurrectFormat(
      req.body["effective_date"]
    );
    model.document_status_uuid = req.body["document_status_uuid"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["salary_trans_uuid"];
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
    return model["position_uuid"] + " - " + model["employee_uuid"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.salary_trans_uuid = req.body["salary_trans_uuid"];
    model.position_uuid = req.body["position_uuid"];
    model.department_uuid = req.body["department_uuid"];
    model.employee_uuid = req.body["employee_uuid"];
    model.remark = req.body["remark"];
    model.salary_trans_date = mTools.toDateCurrectFormat(
      req.body["salary_trans_date"]
    );
    model.salary_uuid = req.body["salary_uuid"];
    model.salary_new = req.body["salary_new"];
    model.salary_old = req.body["salary_old"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.effective_date = mTools.toDateCurrectFormat(
      req.body["effective_date"]
    );
    model.document_status_uuid = req.body["document_status_uuid"];
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
