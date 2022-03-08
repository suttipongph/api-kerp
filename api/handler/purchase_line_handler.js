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
    keyList.push("purchase_header_uuid");
    keyList.push("purchase_request_code");
    keyList.push("line_number");
    keyList.push("items_uuid");
    keyList.push("warehouse_uuid");
    keyList.push("quality");
    keyList.push("unit_uuid");
    keyList.push("price_per_unit");
    keyList.push("discount");
    keyList.push("line_price");
    keyList.push("ref_document");
    keyList.push("request_date");
    keyList.push("remark");
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
    keyList.push("purchase_line_uuid");
    keyList.push("purchase_header_uuid");
    keyList.push("purchase_request_code");
    keyList.push("line_number");
    keyList.push("items_uuid");
    keyList.push("warehouse_uuid");
    keyList.push("quality");
    keyList.push("unit_uuid");
    keyList.push("price_per_unit");
    keyList.push("discount");
    keyList.push("line_price");
    keyList.push("ref_document");
    keyList.push("request_date");
    keyList.push("remark");
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
      "INSERT INTO purchase_line_table (" +
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
    return "UPDATE purchase_line_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE purchase_line_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_purchase_line_table_dropdown " +
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
      "UPDATE purchase_line_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE purchase_line_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_purchase_line_table_list " + mTools.getCondition(req)
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_purchase_line_table_item WHERE purchase_line_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.purchase_header_uuid);
    valuelist.push(data.purchase_request_code);
    valuelist.push(data.line_number);
    valuelist.push(data.items_uuid);
    valuelist.push(data.warehouse_uuid);
    valuelist.push(data.quality);
    valuelist.push(data.unit_uuid);
    valuelist.push(data.price_per_unit);
    valuelist.push(data.discount);
    valuelist.push(mTools.toDateCurrectFormat(data.line_price));
    valuelist.push(data.ref_document);
    valuelist.push(mTools.toDateCurrectFormat(data.request_date));
    valuelist.push(data.remark);
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
    valuelist.push(data.purchase_line_uuid);
    valuelist.push(data.purchase_uuid);
    valuelist.push(data.purchase_request_code);
    valuelist.push(data.line_number);
    valuelist.push(data.items_uuid);
    valuelist.push(data.warehouse_uuid);
    valuelist.push(data.quality);
    valuelist.push(data.unit_uuid);
    valuelist.push(data.price_per_unit);
    valuelist.push(data.discount);
    valuelist.push(mTools.toDateCurrectFormat(data.line_price));
    valuelist.push(data.ref_document);
    valuelist.push(mTools.toDateCurrectFormat(data.request_date));
    valuelist.push(data.remark);
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
    model.purchase_uuid = req.body["purchase_uuid"];
    model.purchase_request_code = req.body["purchase_request_code"];
    model.line_number = req.body["line_number"];
    model.items_uuid = req.body["items_uuid"];
    model.warehouse_uuid = req.body["part_location"];
    model.quality = req.body["quality"];
    model.unit_uuid = req.body["unit_uuid"];
    model.price_per_unit = req.body["unit_price"];
    model.discount = req.body["discount"];
    model.line_price = req.body["line_price"];
    model.ref_document = req.body["ref_document"];
    model.request_date = req.body["request_date"];
    model.remark = req.body["remark"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    model.part_uuid = req.body["part_uuid"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList) => {
  try {
    let optionList = [];
    modelList.forEach((model) => {
      let value = model["purchase_line_uuid"];
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
    model.purchase_line_uuid = req.body["purchase_line_uuid"];
    model.purchase_uuid = req.body["purchase_header_uuid"];
    model.purchase_request_code = req.body["purchase_request_code"];
    model.line_number = req.body["line_number"];
    model.items_uuid = req.body["items_uuid"];
    model.warehouse_uuid = req.body["warehouse_uuid"];
    model.quality = req.body["quality"];
    model.unit_uuid = req.body["unit_uuid"];
    model.price_per_unit = req.body["price_per_unit"];
    model.discount = req.body["discount"];
    model.line_price = req.body["line_price"];
    model.ref_document = req.body["ref_document"];
    model.request_date = req.body["request_date"];
    model.remark = req.body["remark"];
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
