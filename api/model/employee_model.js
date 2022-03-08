const pool = require("../../db");
const handler = require("../handler/employee_handler");

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
let list_by_resign = async (req) => {
  try {
    let result = await pool.query(handler.getSqlListResign(req));
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
let editsalary = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditSalary(req),
      handler.getValuesEditSalary(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let editbacktowork = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditBacktowork(req),
      handler.getValuesEditBacktowork(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let editComplate = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditComplate(req),
      handler.getValuesEditComplate(req)
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
let viewToDoListEmp = async (req) => {
  try {
    const key = req.body.primaryKey;

    const result = await pool.query(handler.getSqlViewToDoListEmp(req), [key]);
    return result.rows;
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

let editDep = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditDep(req),
      handler.getValuesEditDep(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let editProbation = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditProbation(req),
      handler.getValuesEditProbation(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let editposition = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditPosition(req),

      handler.getValuesEditPosition(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmpcode = async (req) => {
  try {
    const result = await pool.query(handler.getSqlGetLastEmpCode(req));

    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let viewNewEmpID = async (req) => {
  try {
    const key = req.body.employee_code;
    const result = await pool.query(handler.getSqlViewByCode(req), [key]);
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let getDayEmpcode = async (req) => {
  try {
    const result = await pool.query(handler.getSqlGetLastDayEmpCode(req));

    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let getMonthEmpcode = async (req) => {
  try {
    const result = await pool.query(handler.getSqlGetLastMonthEmpCode(req));

    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let getEmployeeModelBookmark = async (req) => {
  try {
    // let result = await pool.query(handler.getSqlDropdown(req));
    return {
      model_name: "salary_certificate",
      employee_name: "maneerat jompang",
      employee_position: "programer",
      position_id: "00125",
      salary_amount: "88,888,888.00",
      current_date: "16 `กันยายน 2536",
      salary_amount_text: "แปดสิบแปดล้านแปดแสนแปดสิบแปดบาทถ้วน",
    };
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
  editsalary,
  editDep,
  editbacktowork,
  editComplate,
  editProbation,
  editposition,
  list_by_resign,
  getEmpcode,
  viewNewEmpID,
  getMonthEmpcode,
  getDayEmpcode,
  viewToDoListEmp,
  getEmployeeModelBookmark,
};
