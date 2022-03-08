const mTools = require("../shared/tools/tools");
const { default: jwtDecode } = require("jwt-decode");

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
    keyList.push("subscribe_trans_table_uuid");
    keyList.push("role_table_uuid");
    keyList.push("can_create");
    keyList.push("can_edit");
    keyList.push("can_read");
    keyList.push("can_delete");
    keyList.push("can_action");
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
    keyList.push("access_uuid");
    keyList.push("subscribe_trans_table_uuid");
    keyList.push("role_table_uuid");
    keyList.push("can_create");
    keyList.push("can_edit");
    keyList.push("can_read");
    keyList.push("can_delete");
    keyList.push("can_action");
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
      "INSERT INTO access_table (" +
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
    return "UPDATE access_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE access_uuid = $4 RETURNING *";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req) => {
  try {
    return "SELECT * FROM vw_access_table_dropdown " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (req) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);
    return (
      "UPDATE access_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE access_uuid = $1 RETURNING *"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlList = (req) => {
  try {
    return "SELECT * FROM vw_access_table_list " + mTools.getCondition(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlAccessFeatureList = (role_table_uuid, subcribe_table_uuid) => {
  try {
    return (
      "SELECT * FROM vw_feature_acess_list WHERE role_table_uuid = '" +
      role_table_uuid +
      "' and" +
      " subscribe_table_uuid = '" +
      subcribe_table_uuid +
      "'"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getSqlView = (model) => {
  try {
    return "SELECT * FROM vw_access_table_item WHERE access_uuid = $1";
  } catch (e) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.subscribe_trans_table_uuid);
    valuelist.push(data.role_table_uuid);
    valuelist.push(data.can_create);
    valuelist.push(data.can_edit);
    valuelist.push(data.can_read);
    valuelist.push(data.can_delete);
    valuelist.push(data.can_action);
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
    valuelist.push(getUserNameFromToken(req));
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
    valuelist.push(data.access_uuid);
    valuelist.push(data.subscribe_trans_table_uuid);
    valuelist.push(data.role_table_uuid);
    valuelist.push(data.can_create);
    valuelist.push(data.can_edit);
    valuelist.push(data.can_read);
    valuelist.push(data.can_delete);
    valuelist.push(data.can_action);
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
    model.subscribe_trans_table_uuid = req.body["subscribe_trans_table_uuid"];
    model.role_table_uuid = req.body["role_table_uuid"];
    model.can_create = req.body["can_create"];
    model.can_edit = req.body["can_edit"];
    model.can_read = req.body["can_read"];
    model.can_delete = req.body["can_delete"];
    model.can_action = req.body["can_action"];
    model.company_uuid = req.body["company_uuid"];
    model.branch_uuid = req.body["branch_uuid"];
    model.is_active = true;
    model.create_by = getUserNameFromToken(req);
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
      let value = model["access_uuid"];
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
      model["subscribe_trans_table_uuid"] + " - " + model["role_table_uuid"]
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let toEditModel = (req) => {
  try {
    const update_date = new Date().toISOString();
    var model = {};
    model.access_uuid = req.body["access_uuid"];
    model.subscribe_trans_table_uuid = req.body["subscribe_trans_table_uuid"];
    model.role_table_uuid = req.body["role_table_uuid"];
    model.can_create = req.body["can_create"];
    model.can_edit = req.body["can_edit"];
    model.can_read = req.body["can_read"];
    model.can_delete = req.body["can_delete"];
    model.can_action = req.body["can_action"];
    model.update_by = getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = req.body["ref_uuid"];
    model.ref_type = req.body["ref_type"];
    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEncript = (accessList) => {
  try {
    let accessListFiltered = [];
    accessList.forEach((item) => {
      let model = {
        path: item["path"],
        can_create: item["can_create"],
        can_edit: item["can_edit"],
        can_read: item["can_read"],
        can_delete: item["can_delete"],
        can_action: item["can_action"],
        expire_date: item["expire_date"],
        feature_label: item["label_feature"],
      };
      accessListFiltered.push(JSON.stringify(model));
    });
    return Buffer.from(JSON.stringify(accessListFiltered)).toString("base64");
  } catch (e) {
    throw new Error(e.message);
  }
};
let getUserNameFromToken = (req) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) {
      throw new Error();
    }
    const token = authHeader.split(" ")[0];
    const userModel = jwtDecode(token);
    return userModel.user_name;
  } catch (error) {
    throw new Error(error);
  }
};

let getSqlListByRole = (req) => {
  try {
    return (
      "SELECT * FROM vw_access_table_item WHERE role_table_uuid = '" +
      req.body.select_role_table_uuid +
      "'"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

//copy access feature

let getSqlCreatecopyAccessFeature = (req, body) => {
  try {
    const keys = getKeysCreatecopyAccessFeature(req);

    const values = getValuesCreatecopyAccessFeature(req, body);

    return "INSERT INTO access_table (" + keys + ") values " + values;
  } catch (e) {
    console.log("errorgetSqlCreate", e);
    throw new Error(e.message);
  }
};
let getKeysCreatecopyAccessFeature = (req) => {
  try {
    let keyList = [];
    keyList.push("subscribe_trans_table_uuid");
    keyList.push("role_table_uuid");
    keyList.push("can_create");
    keyList.push("can_edit");
    keyList.push("can_read");
    keyList.push("can_delete");
    keyList.push("can_action");
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

let getValuesCreatecopyAccessFeature = (model, body) => {
  try {
    var valuelist = [];
    var Stringvaluelist = "";
    for (let i = 0; i < model.length; i++) {
      var data = toCreateModelcopyAccessFeature(model, i, body);
      valuelist.push(
        "('" +
          data.subscribe_trans_table_uuid +
          "','" +
          data.role_table_uuid +
          "'," +
          data.can_create +
          "," +
          data.can_edit +
          "," +
          data.can_read +
          "," +
          data.can_delete +
          "," +
          data.can_action +
          ",'" +
          data.company_uuid +
          "','" +
          data.branch_uuid +
          "'," +
          data.is_active +
          ",'" +
          data.create_by +
          "'," +
          data.create_date +
          "," +
          data.ref_uuid +
          "," +
          data.ref_type +
          ")"
      );
      Stringvaluelist += valuelist[i];
      if (i + 1 != model.length) {
        Stringvaluelist += ",";
      }
    }
    return Stringvaluelist;
  } catch (e) {
    throw new Error(e.message);
  }
};
let toCreateModelcopyAccessFeature = (req, i, body) => {
  try {
    const create_date = new Date().toISOString();

    var model = {};

    model.subscribe_trans_table_uuid = req[i].subscribe_trans_table_uuid;
    model.role_table_uuid = body.body.role_table_uuid;
    model.can_create = req[i].can_create;
    model.can_edit = req[i].can_edit;
    model.can_read = req[i].can_read;
    model.can_delete = req[i].can_delete;
    model.can_action = req[i].can_action;
    model.company_uuid = req[i].company_uuid;
    model.branch_uuid = req[i].branch_uuid;
    model.is_active = true;
    model.create_by = getUserNameFromToken(body);
    model.create_date = `'${create_date}'`;
    model.ref_uuid = req[i].ref_uuid;
    model.ref_type = req[i].ref_type;

    return model;
  } catch (e) {
    throw new Error(e.message);
  }
};

let getMySqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_access_table_item WHERE role_table_uuid = '" +
      req.body.role_table_uuid +
      "'"
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
let getFilterSqlList = (req) => {
  try {
    return (
      "SELECT * FROM vw_access_table_item WHERE role_table_uuid = '" +
      req.body.select_role_table_uuid +
      "' AND subscribe_trans_table_uuid NOT IN (SELECT subscribe_trans_table_uuid FROM vw_access_table_item WHERE role_table_uuid='" +
      req.body.role_table_uuid +
      "');"
    );
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
  getSqlAccessFeatureList,
  getEncript,
  getSqlListByRole,
  getValuesCreatecopyAccessFeature,
  getSqlCreatecopyAccessFeature,
  getMySqlList,
  getFilterSqlList,
};
