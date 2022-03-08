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
    keyList.push("suplier_code");
    keyList.push("description");
    keyList.push("suplier_name");
    keyList.push("contact_person_uuid");
    keyList.push("address_uuid");
    keyList.push("suplier_category_uuid");
    keyList.push("bank_uuid");
    keyList.push("remark");
    keyList.push("company_category_uuid");
    keyList.push("suplier_branch_uuid");
    keyList.push("credit_term");
    keyList.push("tax_id");
    keyList.push("tax_status");
    keyList.push("main_product");
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
    keyList.push("suplier_uuid");
    keyList.push("suplier_code");
    keyList.push("description");
    keyList.push("suplier_name");
    keyList.push("contact_person_uuid");
    keyList.push("address_uuid");
    keyList.push("suplier_category_uuid");
    keyList.push("bank_uuid");
    keyList.push("remark");
    keyList.push("company_category_uuid");
    keyList.push("suplier_branch_uuid");
    keyList.push("credit_term");
    keyList.push("tax_id");
    keyList.push("tax_status");
    keyList.push("main_product");
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
      "INSERT INTO suplier_table (" +
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
    return "UPDATE suplier_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE suplier_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_suplier_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE suplier_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE suplier_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_suplier_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_suplier_table_item WHERE suplier_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.suplier_code);
    valuelist.push(data.description);
    valuelist.push(data.suplier_name);
    valuelist.push(data.contact_person_uuid);
    valuelist.push(data.address_uuid);
    valuelist.push(data.suplier_category_uuid);
    valuelist.push(data.bank_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.company_category_uuid);
    valuelist.push(data.suplier_branch_uuid);
    valuelist.push(data.credit_term);
    valuelist.push(data.tax_id);
    valuelist.push(data.tax_status);
    valuelist.push(data.main_product);
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
    valuelist.push(data.suplier_uuid);
    valuelist.push(data.suplier_code);
    valuelist.push(data.description);
    valuelist.push(data.suplier_name);
    valuelist.push(data.contact_person_uuid);
    valuelist.push(data.address_uuid);
    valuelist.push(data.suplier_category_uuid);
    valuelist.push(data.bank_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.company_category_uuid);
    valuelist.push(data.suplier_branch_uuid);
    valuelist.push(data.credit_term);
    valuelist.push(data.tax_id);
    valuelist.push(data.tax_status);
    valuelist.push(data.main_product);
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
    model.suplier_code = req.body["suplier_code"];
    model.description = req.body["description"];
    model.suplier_name = req.body["suplier_name"];
    model.contact_person_uuid = req.body["contact_person_uuid"];
    model.address_uuid = req.body["address_uuid"];
    model.suplier_category_uuid = req.body["suplier_category_uuid"];
    model.bank_uuid = req.body["bank_uuid"];
    model.remark = req.body["remark"];
    model.company_category_uuid = req.body["company_category_uuid"];
    model.suplier_branch_uuid = req.body["suplier_branch_uuid"];
    model.credit_term = req.body["credit_term"];
    model.tax_id = req.body["tax_id"];
    model.tax_status = req.body["tax_status"];
    model.main_product = req.body["main_product"];
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
      let value = model["suplier_uuid"];
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
    return model["suplier_code"] + " - " + model["suplier_name"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.suplier_uuid = req.body["suplier_uuid"];
    model.suplier_code = req.body["suplier_code"];
    model.description = req.body["description"];
    model.suplier_name = req.body["suplier_name"];
    model.contact_person_uuid = req.body["contact_person_uuid"];
    model.address_uuid = req.body["address_uuid"];
    model.suplier_category_uuid = req.body["suplier_category_uuid"];
    model.bank_uuid = req.body["bank_uuid"];
    model.remark = req.body["remark"];
    model.company_category_uuid = req.body["company_category_uuid"];
    model.suplier_branch_uuid = req.body["suplier_branch_uuid"];
    model.credit_term = req.body["credit_term"];
    model.tax_id = req.body["tax_id"];
    model.tax_status = req.body["tax_status"];
    model.main_product = req.body["main_product"];
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
