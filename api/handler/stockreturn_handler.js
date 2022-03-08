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
    keyList.push("voucher_return_id");
    keyList.push("stockreturn_date");
    keyList.push("stockreturn_time");
    keyList.push("receive_uuid");
    keyList.push("sender_uuid");
    keyList.push("ref_return");
    keyList.push("part_uuid");
    keyList.push("part_qty");
    keyList.push("part_unit_uuid");
    keyList.push("part_unit_price");
    keyList.push("invent_trans_uuid");
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
    keyList.push("stockreturn_uuid");
    keyList.push("voucher_return_id");
    keyList.push("stockreturn_date");
    keyList.push("stockreturn_time");
    keyList.push("receive_uuid");
    keyList.push("sender_uuid");
    keyList.push("ref_return");
    keyList.push("part_uuid");
    keyList.push("part_qty");
    keyList.push("part_unit_uuid");
    keyList.push("part_unit_price");
    keyList.push("invent_trans_uuid");
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
      "INSERT INTO stockreturn_table (" +
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
    return "UPDATE stockreturn_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE stockreturn_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_stockreturn_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE stockreturn_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE stockreturn_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_stockreturn_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_stockreturn_table_item WHERE stockreturn_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.voucher_return_id);
    valuelist.push(mTools.toDateCurrectFormat(data.stockreturn_date));
    valuelist.push(data.stockreturn_time);
    valuelist.push(data.receive_uuid);
    valuelist.push(data.sender_uuid);
    valuelist.push(data.ref_return);
    valuelist.push(data.part_uuid);
    valuelist.push(data.part_qty);
    valuelist.push(data.part_unit_uuid);
    valuelist.push(data.part_unit_price);
    valuelist.push(data.invent_trans_uuid);
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
    valuelist.push(data.stockreturn_uuid);
    valuelist.push(data.voucher_return_id);
    valuelist.push(mTools.toDateCurrectFormat(data.stockreturn_date));
    valuelist.push(data.stockreturn_time);
    valuelist.push(data.receive_uuid);
    valuelist.push(data.sender_uuid);
    valuelist.push(data.ref_return);
    valuelist.push(data.part_uuid);
    valuelist.push(data.part_qty);
    valuelist.push(data.part_unit_uuid);
    valuelist.push(data.part_unit_price);
    valuelist.push(data.invent_trans_uuid);
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
    model.voucher_return_id = req.body["voucher_return_id"];
    model.stockreturn_date = req.body["stockreturn_date"];
    model.stockreturn_time = req.body["stockreturn_time"];
    model.receive_uuid = req.body["receive_uuid"];
    model.sender_uuid = req.body["sender_uuid"];
    model.ref_return = req.body["ref_return"];
    model.part_uuid = req.body["part_uuid"];
    model.part_qty = req.body["part_qty"];
    model.part_unit_uuid = req.body["part_unit_uuid"];
    model.part_unit_price = req.body["part_unit_price"];
    model.invent_trans_uuid = req.body["invent_trans_uuid"];
    model.remark = req.body["remark"];
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
      let value = model["stockreturn_uuid"];
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
    return model["voucher_return_id"] + " - " + model["stockreturn_date"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.stockreturn_uuid = req.body["stockreturn_uuid"];
    model.voucher_return_id = req.body["voucher_return_id"];
    model.stockreturn_date = req.body["stockreturn_date"];
    model.stockreturn_time = req.body["stockreturn_time"];
    model.receive_uuid = req.body["receive_uuid"];
    model.sender_uuid = req.body["sender_uuid"];
    model.ref_return = req.body["ref_return"];
    model.part_uuid = req.body["part_uuid"];
    model.part_qty = req.body["part_qty"];
    model.part_unit_uuid = req.body["part_unit_uuid"];
    model.part_unit_price = req.body["part_unit_price"];
    model.invent_trans_uuid = req.body["invent_trans_uuid"];
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
