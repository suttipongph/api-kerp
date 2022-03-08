const pool = require("../../db");
const handler = require("../handler/purchase_header_handler");
let create = async (req) => {
  try {
    let sql = "SELECT * FROM purchase_header_table WHERE purchase_code = '"+  req.body.purchase_code +"' AND is_active = true"
    let resultrow = await pool.query(sql)
    if(resultrow.rowCount < 1){
      let result = await pool.query(
          handler.getSqlCreate(req),
          handler.getValuesCreate(req)
        );
        return result.rows[0];
    } 
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
module.exports = { list, create, edit, view, del, dropdown };
