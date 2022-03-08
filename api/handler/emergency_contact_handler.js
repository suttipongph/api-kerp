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
    keyList.push("emergency_contact_name");
    keyList.push("emergency_contact_phone");
    keyList.push("address");
    // keyList.push("country_uuid");
    // keyList.push("province_uuid");
    // keyList.push("district_uuid");
    // keyList.push("sub_district_uuid");
    keyList.push("remark");
    keyList.push("is_primary");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("implicate");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("emergency_contact_uuid");
    keyList.push("emergency_contact_name");
    keyList.push("emergency_contact_phone");
    keyList.push("address");
    // keyList.push("country_uuid");
    // keyList.push("province_uuid");
    // keyList.push("district_uuid");
    // keyList.push("sub_district_uuid");
    keyList.push("remark");
    keyList.push("is_primary");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("implicate");
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
      "INSERT INTO emergency_contact_table (" +
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
    return "UPDATE emergency_contact_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE emergency_contact_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_emergency_contact_table_dropdown " +
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
      "UPDATE emergency_contact_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE emergency_contact_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_emergency_contact_table_list " +
      mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_emergency_contact_table_item WHERE emergency_contact_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.emergency_contact_name);
    valuelist.push(data.emergency_contact_phone);
    valuelist.push(data.address);
    // valuelist.push(data.country_uuid);
    // valuelist.push(data.province_uuid);
    // valuelist.push(data.district_uuid);
    // valuelist.push(data.sub_district_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.is_primary);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.implicate);
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
    valuelist.push(data.emergency_contact_uuid);
    valuelist.push(data.emergency_contact_name);
    valuelist.push(data.emergency_contact_phone);
    valuelist.push(data.address);
    // valuelist.push(data.country_uuid);
    // valuelist.push(data.province_uuid);
    // valuelist.push(data.district_uuid);
    // valuelist.push(data.sub_district_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.is_primary);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.implicate);
    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.emergency_contact_name = req.body["emergency_contact_name"];
    model.emergency_contact_phone = req.body["emergency_contact_phone"];
    model.address = req.body["emergency_address"];
    // model.country_uuid = req.body["country_uuid"];
    // model.province_uuid = req.body["province_uuid"];
    // model.district_uuid = req.body["district_uuid"];
    // model.sub_district_uuid = req.body["sub_district_uuid"];
    model.remark = req.body["remark"];
    model.is_primary = req.body["is_primary"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.implicate = req.body["implicate"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["emergency_contact_uuid"];
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
    return (
      model["emergency_contact_name"] + " - " + model["emergency_contact_phone"]
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.emergency_contact_uuid = req.body["emergency_contact_uuid"];
    model.emergency_contact_name = req.body["emergency_contact_name"];
    model.emergency_contact_phone = req.body["emergency_contact_phone"];
    model.address = req.body["address"];
    // model.country_uuid = req.body["country_uuid"];
    // model.province_uuid = req.body["province_uuid"];
    // model.district_uuid = req.body["district_uuid"];
    // model.sub_district_uuid = req.body["sub_district_uuid"];
    model.remark = req.body["remark"];
    model.is_primary = req.body["is_primary"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.implicate = req.body["implicate"];
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
