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
    keyList.push("register_station_code");
    keyList.push("register_station_name");
    keyList.push("description");
    keyList.push("images");
    keyList.push("gender");
    keyList.push("date_of_birth");
    keyList.push("phone_number");
    keyList.push("email");
    keyList.push("address");
    keyList.push("education");
    keyList.push("educational_status");
    keyList.push("degree");
    keyList.push("educational_institution");
    keyList.push("graduation_year");
    keyList.push("gpa");
    keyList.push("work_experience");
    keyList.push("duration_start");
    keyList.push("duration_end");
    keyList.push("company_name");
    keyList.push("position");
    keyList.push("salary");
    keyList.push("job_description");
    keyList.push("other_documents");
    keyList.push("introduce_yourself");
    keyList.push("remark");
    keyList.push("document_status_uuid");
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
    keyList.push("register_station_uuid");
    keyList.push("register_station_code");
    keyList.push("register_station_name");
    keyList.push("description");
    keyList.push("images");
    keyList.push("gender");
    keyList.push("date_of_birth");
    keyList.push("phone_number");
    keyList.push("email");
    keyList.push("address");
    keyList.push("education");
    keyList.push("educational_status");
    keyList.push("degree");
    keyList.push("educational_institution");
    keyList.push("graduation_year");
    keyList.push("gpa");
    keyList.push("work_experience");
    keyList.push("duration_start");
    keyList.push("duration_end");
    keyList.push("company_name");
    keyList.push("position");
    keyList.push("salary");
    keyList.push("job_description");
    keyList.push("other_documents");
    keyList.push("introduce_yourself");
    keyList.push("remark");
    keyList.push("document_status_uuid");
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
      "INSERT INTO register_station_table (" +
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
    return "UPDATE register_station_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE register_station_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_register_station_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE register_station_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE register_station_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_register_station_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_register_station_table_item WHERE register_station_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.register_station_code);
    valuelist.push(data.register_station_name);
    valuelist.push(data.description);
    valuelist.push(data.images);
    valuelist.push(data.gender);
    valuelist.push(data.date_of_birth);
    valuelist.push(data.phone_number);
    valuelist.push(data.email);
    valuelist.push(data.address);
    valuelist.push(data.education);
    valuelist.push(data.educational_status);
    valuelist.push(data.degree);
    valuelist.push(data.educational_institution);
    valuelist.push(data.graduation_year);
    valuelist.push(data.gpa);
    valuelist.push(data.work_experience);
    valuelist.push(data.duration_start);
    valuelist.push(data.duration_end);
    valuelist.push(data.company_name);
    valuelist.push(data.position);
    valuelist.push(data.salary);
    valuelist.push(data.job_description);
    valuelist.push(data.other_documents);
    valuelist.push(data.introduce_yourself);
    valuelist.push(data.remark);
    valuelist.push(data.document_status_uuid);
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
    valuelist.push(data.register_station_uuid);
    valuelist.push(data.register_station_code);
    valuelist.push(data.register_station_name);
    valuelist.push(data.description);
    valuelist.push(data.images);
    valuelist.push(data.gender);
    valuelist.push(data.date_of_birth);
    valuelist.push(data.phone_number);
    valuelist.push(data.email);
    valuelist.push(data.address);
    valuelist.push(data.education);
    valuelist.push(data.educational_status);
    valuelist.push(data.degree);
    valuelist.push(data.educational_institution);
    valuelist.push(data.graduation_year);
    valuelist.push(data.gpa);
    valuelist.push(data.work_experience);
    valuelist.push(data.duration_start);
    valuelist.push(data.duration_end);
    valuelist.push(data.company_name);
    valuelist.push(data.position);
    valuelist.push(data.salary);
    valuelist.push(data.job_description);
    valuelist.push(data.other_documents);
    valuelist.push(data.introduce_yourself);
    valuelist.push(data.remark);
    valuelist.push(data.document_status_uuid);
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
    model.register_station_code = req.body["register_station_code"];
    model.register_station_name = req.body["register_station_name"];
    model.description = req.body["description"];
    model.images = req.body["images"];
    model.gender = req.body["gender"];
    model.date_of_birth = req.body["date_of_birth"];
    model.phone_number = req.body["phone_number"];
    model.email = req.body["email"];
    model.address = req.body["address"];
    model.education = req.body["education"];
    model.educational_status = req.body["educational_status"];
    model.degree = req.body["degree"];
    model.educational_institution = req.body["educational_institution"];
    model.graduation_year = req.body["graduation_year"];
    model.gpa = req.body["gpa"];
    model.work_experience = req.body["work_experience"];
    model.duration_start = req.body["duration_start"];
    model.duration_end = req.body["duration_end"];
    model.company_name = req.body["company_name"];
    model.position = req.body["position"];
    model.salary = req.body["salary"];
    model.job_description = req.body["job_description"];
    model.other_documents = req.body["other_documents"];
    model.introduce_yourself = req.body["introduce_yourself"];
    model.remark = req.body["remark"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date
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
      let value = model["register_station_uuid"];
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
    return model["register_station_code"] + " - " + model["register_station_name"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.register_station_uuid = req.body["register_station_uuid"];
    model.register_station_code = req.body["register_station_code"];
    model.register_station_name = req.body["register_station_name"];
    model.description = req.body["description"];
    model.images = req.body["images"];
    model.gender = req.body["gender"];
    model.date_of_birth = req.body["date_of_birth"];
    model.phone_number = req.body["phone_number"];
    model.email = req.body["email"];
    model.address = req.body["address"];
    model.education = req.body["education"];
    model.educational_status = req.body["educational_status"];
    model.degree = req.body["degree"];
    model.educational_institution = req.body["educational_institution"];
    model.graduation_year = req.body["graduation_year"];
    model.gpa = req.body["gpa"];
    model.work_experience = req.body["work_experience"];
    model.duration_start = req.body["duration_start"];
    model.duration_end = req.body["duration_end"];
    model.company_name = req.body["company_name"];
    model.position = req.body["position"];
    model.salary = req.body["salary"];
    model.job_description = req.body["job_description"];
    model.other_documents = req.body["other_documents"];
    model.introduce_yourself = req.body["introduce_yourself"];
    model.remark = req.body["remark"];
    model.document_status_uuid = req.body["document_status_uuid"];
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
