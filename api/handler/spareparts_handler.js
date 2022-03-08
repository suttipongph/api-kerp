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
    keyList.push("spareparts_name");
    keyList.push("employee_uuid");
    keyList.push("description");
    keyList.push("purchsing_uuid");
    keyList.push("serial_number");
    keyList.push("model");
    keyList.push("size");
    keyList.push("remaining_amount");
    keyList.push("picking_amount");
    keyList.push("units_uuid");
    keyList.push("vehicle_picking_date");
    keyList.push("status_uuid");
    keyList.push("remark");
    keyList.push("spareparts_code");
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
    keyList.push("spareparts_uuid");
    keyList.push("spareparts_name");
    keyList.push("employee_uuid");
    keyList.push("description");
    keyList.push("purchsing_uuid");
    keyList.push("serial_number");
    keyList.push("model");
    keyList.push("size");
    keyList.push("remaining_amount");
    keyList.push("picking_amount");
    keyList.push("units_uuid");
    keyList.push("vehicle_picking_date");
    keyList.push("status_uuid");
    keyList.push("remark");
    keyList.push("spareparts_code");
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
      "INSERT INTO spareparts_table (" +
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
    return "UPDATE spareparts_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE spareparts_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return (
      "SELECT * FROM vw_spareparts_table_dropdown " + mTools.getCondition(req)
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
      "UPDATE spareparts_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE spareparts_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_spareparts_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_spareparts_table_item WHERE spareparts_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.spareparts_name);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.description);
    valuelist.push(data.purchsing_uuid);
    valuelist.push(data.serial_number);
    valuelist.push(data.model);
    valuelist.push(data.size);
    valuelist.push(data.remaining_amount);
    valuelist.push(data.picking_amount);
    valuelist.push(data.units_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.vehicle_picking_date));
    valuelist.push(data.status_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.spareparts_code);
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
    valuelist.push(data.spareparts_uuid);
    valuelist.push(data.spareparts_name);
    valuelist.push(data.employee_uuid);
    valuelist.push(data.description);
    valuelist.push(data.purchsing_uuid);
    valuelist.push(data.serial_number);
    valuelist.push(data.model);
    valuelist.push(data.size);
    valuelist.push(data.remaining_amount);
    valuelist.push(data.picking_amount);
    valuelist.push(data.units_uuid);
    valuelist.push(mTools.toDateCurrectFormat(data.vehicle_picking_date));
    valuelist.push(data.status_uuid);
    valuelist.push(data.remark);
    valuelist.push(data.spareparts_code);
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
    model.spareparts_name = req.body["spareparts_name"];
    model.employee_uuid = req.body["employee_uuid"];
    model.description = req.body["description"];
    model.purchsing_uuid = req.body["purchsing_uuid"];
    model.serial_number = req.body["serial_number"];
    model.model = req.body["model"];
    model.size = req.body["size"];
    model.remaining_amount = req.body["remaining_amount"];
    model.picking_amount = req.body["picking_amount"];
    model.units_uuid = req.body["units_uuid"];
    model.vehicle_picking_date = req.body["vehicle_picking_date"];
    model.status_uuid = req.body["status_uuid"];
    model.remark = req.body["remark"];
    model.spareparts_code = req.body["spareparts_code"];
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
      let value = model["spareparts_uuid"];
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
    return model["spareparts_code"] + " - " + model["spareparts_name"];
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.spareparts_uuid = req.body["spareparts_uuid"];
    model.spareparts_name = req.body["spareparts_name"];
    model.employee_uuid = req.body["employee_uuid"];
    model.description = req.body["description"];
    model.purchsing_uuid = req.body["purchsing_uuid"];
    model.serial_number = req.body["serial_number"];
    model.model = req.body["model"];
    model.size = req.body["size"];
    model.remaining_amount = req.body["remaining_amount"];
    model.picking_amount = req.body["picking_amount"];
    model.units_uuid = req.body["units_uuid"];
    model.vehicle_picking_date = req.body["vehicle_picking_date"];
    model.status_uuid = req.body["status_uuid"];
    model.remark = req.body["remark"];
    model.spareparts_code = req.body["spareparts_code"];
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
