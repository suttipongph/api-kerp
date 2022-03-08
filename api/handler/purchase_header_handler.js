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
    keyList.push("purchase_code");
    keyList.push("purchase_requasition_code");
    keyList.push("supplier_uuid");
    keyList.push("payment_method_uuid");
    keyList.push("contact_uuid");
    keyList.push("purchase_date");
    keyList.push("document_date");
    keyList.push("request_date");
    keyList.push("purchase_requester");
    keyList.push("purchase_approver");
    keyList.push("document_status_uuid");
    keyList.push("delivery_location");
    keyList.push("delivery_number");
    keyList.push("remark");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("total_amount");
    keyList.push("total_vat_amount");
    return keyList;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req) => {
  try {
    let keyList = [];
    keyList.push("purchase_header_uuid");
    keyList.push("purchase_code");
    keyList.push("purchase_requasition_code");
    keyList.push("supplier_uuid");
    keyList.push("payment_method_uuid");
    keyList.push("contact_uuid");
    keyList.push("purchase_date");
    keyList.push("document_date");
    keyList.push("request_date");
    keyList.push("purchase_requester");
    keyList.push("purchase_approver");
    keyList.push("document_status_uuid");
    keyList.push("delivery_location");
    keyList.push("delivery_number");
    keyList.push("remark");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    keyList.push("total_amount");
    keyList.push("total_vat_amount");
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
      "INSERT INTO purchase_header_table (" +
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
    return "UPDATE purchase_header_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE purchase_header_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_purchase_header_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE purchase_header_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE purchase_header_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_purchase_header_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_purchase_header_table_item WHERE purchase_header_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.purchase_code);
    valuelist.push(data.purchase_requasition_code);
    valuelist.push(data.supplier_uuid);
    valuelist.push(data.payment_method_uuid);
    valuelist.push(data.contact_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.purchase_date));
    valuelist.push(mTools.toDateCurrectFormat(data.document_date));
    valuelist.push(mTools.toDateCurrectFormat(data.request_date));
    valuelist.push(data.purchase_requester);
    valuelist.push(data.purchase_approver);
    valuelist.push(data.document_status_uuid);
    valuelist.push(data.delivery_location);
    valuelist.push(data.delivery_number);
    valuelist.push(data.remark);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.total_amount);
    valuelist.push(data.total_vat_amount);
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
    valuelist.push(data.purchase_header_uuid);
    valuelist.push(data.purchase_code);
    valuelist.push(data.purchase_requasition_code);
    valuelist.push(data.supplier_uuid);
    valuelist.push(data.payment_method_uuid);
    valuelist.push(data.contact_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.purchase_date));
    valuelist.push(mTools.toDateCurrectFormat(data.document_date));
    valuelist.push(mTools.toDateCurrectFormat(data.request_date));
    valuelist.push(data.purchase_requester);
    valuelist.push(data.purchase_approver);
    valuelist.push(data.document_status_uuid);
    valuelist.push(data.delivery_location);
    valuelist.push(data.delivery_number);
    valuelist.push(data.remark);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    valuelist.push(data.total_amount);
    valuelist.push(data.total_vat_amount);

    return valuelist;
  } catch (error) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req) => {
  try {
    const create_date = new Date().toISOString();
    var model = {};
    model.purchase_code = req.body["purchase_code"];
    model.purchase_requasition_code = req.body["purchase_requasition_code"];
    model.supplier_uuid = req.body["supplier_uuid"];
    model.payment_method_uuid = req.body["payment_method_uuid"];
    model.contact_uuid = req.body["contact_uuid"];
    model.purchase_date = req.body["purchase_date"];
    model.document_date = req.body["document_date"];
    model.request_date = req.body["request_date"];
    model.purchase_requester = req.body["purchase_requester"];
    model.purchase_approver = req.body["purchase_approver"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.delivery_location = req.body["delivery_location"];
    model.delivery_number = req.body["delivery_number"];
    model.remark = req.body["remark"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.total_amount = req.body["total_amount"];
    model.total_vat_amount = req.body["total_vat_amount"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["purchase_header_uuid"];
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
    return model["purchase_requasition_code"] + " - " + model["supplier_uuid"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.purchase_header_uuid = req.body["purchase_header_uuid"];
    model.purchase_code = req.body["purchase_code"];
    model.purchase_requasition_code = req.body["purchase_requasition_code"];
    model.supplier_uuid = req.body["supplier_uuid"];
    model.payment_method_uuid = req.body["payment_method_uuid"];
    model.contact_uuid = req.body["contact_uuid"];
    model.purchase_date = req.body["purchase_date"];
    model.document_date = req.body["document_date"];
    model.request_date = req.body["request_date"];
    model.purchase_requester = req.body["purchase_requester"];
    model.purchase_approver = req.body["purchase_approver"];
    model.document_status_uuid = req.body["document_status_uuid"];
    model.delivery_location = req.body["delivery_location"];
    model.delivery_number = req.body["delivery_number"];
    model.remark = req.body["remark"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.total_amount = req.body["total_amount"];
    model.total_vat_amount = req.body["total_vat_amount"];
  
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
