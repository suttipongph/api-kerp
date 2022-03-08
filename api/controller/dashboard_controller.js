const mTools = require("../shared/tools/tools");
const pool = require("../../db");

let dashboard = async (req, res) => {
  let table = "vw_" + req.body.table + "_table_list ";
  let filter =
    " AND document_status_value = '" +
    req.body.key +
    "'" +
    "AND department_uuid = '" +
    req.body.depUUID +
    "'";
  let sql = "SELECT * FROM " + table + mTools.getCondition(req) + filter;
  let result = await pool.query(sql);
  res.status(200).json((await result).rowCount);
};

let dashboard_hr = async (req, res) => {
  let table = "vw_" + req.body.table + "_table_list ";

  let filter = " AND document_status_value = '" + req.body.key + "'";
  if (req.body.key === "") {
    filter = "";
  }
  let sql = "SELECT * FROM " + table + mTools.getCondition(req) + filter;
  let result = await pool.query(sql);
  res.status(200).json((await result).rowCount);
};

//_______________________________ถ้ามีอะไรเพิ่มเติมมากกว่านี้เดียวแยกไฟล์_____________________________________

module.exports = {
  dashboard,
  dashboard_hr,
};
