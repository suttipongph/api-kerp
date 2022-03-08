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
    keyList.push("company_name");
    keyList.push("duration_start");
    keyList.push("duration_end");
    keyList.push("position");
    keyList.push("salary");
    keyList.push("job_description");
    keyList.push("introduce_yourself");
    keyList.push("remark");
    keyList.push("employee_uuid");
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
    keyList.push("work_experiencen_uuid");
    keyList.push("company_name");
    keyList.push("duration_start");
    keyList.push("duration_end");
    keyList.push("position");
    keyList.push("salary");
    keyList.push("job_description");
    keyList.push("introduce_yourself");
    keyList.push("remark");
    keyList.push("employee_uuid");
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
      "INSERT INTO work_experiencen_table (" +
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
    return "UPDATE work_experiencen_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE work_experiencen_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_work_experiencen_table_dropdown " +
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
      "UPDATE work_experiencen_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE work_experiencen_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_work_experiencen_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_work_experiencen_table_item WHERE work_experiencen_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.company_name);
    valuelist.push(data.duration_start);
    valuelist.push(data.duration_end);
    valuelist.push(data.position);
    valuelist.push(data.salary);
    valuelist.push(data.job_description);
    valuelist.push(data.introduce_yourself);
    valuelist.push(data.remark);
    valuelist.push(data.employee_uuid);
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
    valuelist.push(data.work_experiencen_uuid);
    valuelist.push(data.company_name);
    valuelist.push(data.duration_start);
    valuelist.push(data.duration_end);
    valuelist.push(data.position);
    valuelist.push(data.salary);
    valuelist.push(data.job_description);
    valuelist.push(data.introduce_yourself);
    valuelist.push(data.remark);
    valuelist.push(data.employee_uuid);
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
    model.company_name = req.body["company_name"];
    model.duration_start = mTools.toDateCurrectFormat(
      req.body["duration_start"]
    );
    model.duration_end = mTools.toDateCurrectFormat(req.body["duration_end"]);
    model.position = req.body["position"];
    model.salary = req.body["salary"];
    model.job_description = req.body["job_description"];
    model.introduce_yourself = req.body["introduce_yourself"];
    model.remark = req.body["remark"];
    model.employee_uuid = req.body["employee_uuid"];
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
      let value = model["work_experiencen_uuid"];
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
    model.work_experiencen_uuid = req.body["work_experiencen_uuid"];
    model.company_name = req.body["company_name"];
    model.duration_start = mTools.toDateCurrectFormat(
      req.body["duration_start"]
    );
    model.duration_end = mTools.toDateCurrectFormat(req.body["duration_end"]);
    model.position = req.body["position"];
    model.salary = req.body["salary"];
    model.job_description = req.body["job_description"];
    model.introduce_yourself = req.body["introduce_yourself"];
    model.remark = req.body["remark"];
    model.employee_uuid = req.body["employee_uuid"];
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
