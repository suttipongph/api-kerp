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
    keyList.push("employee_uuid");
    keyList.push("position_uuid");

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

let getSqlEdit = (req) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);

    return (
      "UPDATE employee_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE employee_uuid = $1 RETURNING *"
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
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(mTools.toDateCurrectFormat(data.effective_date));
    valuelist.push(data.document_status_uuid);
    return valuelist;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getValuesEdit = (model) => {
  try {
    var data = toEditModel(model);
    let valuelist = [];
    valuelist.push(data.employee_uuid);
    valuelist.push(data.position_uuid);

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
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.effective_date = req.body["effective_date"];
    model.document_status_uuid = req.body["document_status_uuid"];
    return model;
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
    var model = {};
    model.employee_uuid = req.body["employee_uuid"];
    model.position_uuid = req.body["position_new"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getKeysEdit,
  getValuesEdit,
  getIndexEdit,
  getKeysCreate,
  getValuesCreate,
  getIndexCreate,
  getSqlCreate,
  getSqlEdit,
  getRoWAuth,
};
