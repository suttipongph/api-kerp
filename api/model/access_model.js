const pool = require("../../db");
const handler = require("../handler/access_handler");
let create = async (req) => {
  try {
    let result = await pool.query(
      handler.getSqlCreate(req),
      handler.getValuesCreate(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let list = async (req) => {
  try {
    let result = await pool.query(handler.getSqlList(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let list_acess_feature_view = async (role_table_uuid, subcribe_table_uuid) => {
  try {
    let result = await pool.query(
      handler.getSqlAccessFeatureList(role_table_uuid, subcribe_table_uuid)
    );

    return handler.getEncript(result.rows);
  } catch (e) {
    throw new Error(e.message);
  }
};

let edit = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEdit(req),
      handler.getValuesEdit(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let del = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlDelete(),
      handler.getValuesDelete(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let view = async (req) => {
  try {
    const key = req.body.primaryKey;
    const result = await pool.query(handler.getSqlView(req), [key]);
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let dropdown = async (req) => {
  try {
    let result = await pool.query(handler.getSqlDropdown(req));
    return handler.toDropdown(result.rows);
  } catch (e) {
    throw new Error(e.message);
  }
};
let aceessFeatureListBySelectRoleCopy = async (req) => {
  try {
    let result = await pool.query(handler.getSqlListByRole(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let copyAccessFeature = async (accessdata, body) => {
  try {
    let result = await pool.query(
      handler.getSqlCreatecopyAccessFeature(accessdata, body)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let myAceessFeatureList = async (req) => {
  try {
    let result = await pool.query(handler.getMySqlList(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let filterAccessFeature = async (req) => {
  try {
    let result = await pool.query(handler.getFilterSqlList(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  list,
  create,
  edit,
  view,
  del,
  dropdown,
  list_acess_feature_view,
  aceessFeatureListBySelectRoleCopy,
  copyAccessFeature,
  myAceessFeatureList,
  filterAccessFeature,
};
