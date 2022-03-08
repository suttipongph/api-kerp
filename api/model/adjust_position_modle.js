const pool = require("../../db");
const handler = require("../handler/adjust_position_handler");
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

module.exports = { create, edit };
