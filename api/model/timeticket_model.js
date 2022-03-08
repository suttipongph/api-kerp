const pool = require("../../db");
const handler = require("../handler/timeticket_handler");
const mTools = require("../shared/tools/tools");

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

let revisiontime = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEditrevisiontime(req),
      handler.getValuesEditrevisiontime(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};

let importTimticket = async (req) => {
  try {
    let dateList = [];
    let timeList = [];
    let employeeIdList = [];
    let new_employeeIdList = [];
    let jsonList = [];
    Object.keys(req.body).forEach((index) => {
      req.body[index].ticket_list.forEach((item_list) => {
        item_list.ticket_list.forEach((value) => {
          let ticketDate = mTools.toDateCurrectHip(value.ticket_date);
          dateList.push(ticketDate);
          timeList.push("'" + value.ticket_time + "'");
          employeeIdList.push("'" + value.employee_id + "'");
          jsonList.push({
            ticket_date: ticketDate,
            ticket_time: `'${value.ticket_time}'`,
            employee_code: value.employee_id,
          });
        });
      });
    });
    const dateListStr = dateList.toString();
    const timeListStr = timeList.toString();
    const employeeIdListStr = employeeIdList.toString();
    var sql =
      "SELECT * FROM vw_timeticket_trans_table_item where timeticket_trans_date IN (" +
      dateListStr +
      ") AND " +
      " timeticket_trans_time IN (" +
      timeListStr +
      ") AND " +
      " employee_code IN (" +
      employeeIdListStr +
      ")";
    let result = await pool.query(sql);
    const ticket_access = result.rows;
    employeeIdList.forEach((employee_item) => {
      let isAccess = true;
      ticket_access.forEach((access_item) => {
        if (employee_item == `'${access_item.employee_code}'`) {
          isAccess = false;
        }
      });
      if (isAccess) {
        new_employeeIdList.push(employee_item);
      }
    });
    const strnew_employeeIdList = new_employeeIdList.toString();
    var sq_new_ticket =
      "SELECT * FROM employee_table where employee_code IN (" +
      strnew_employeeIdList +
      ")";
    let newTicketEmployee = await pool.query(sq_new_ticket);
    const create_date = new Date().toISOString();
    let valueStringList = [];
    newTicketEmployee.rows.forEach((item) => {
      let ticketModel = getTicketModel(item.employee_code, jsonList);
      let valueString = `(${ticketModel.ticket_time},${ticketModel.ticket_date},'${item.employee_uuid}','6401dee8-8c18-4099-b704-4a954f52a66f','12a3cf93-a095-4391-a57d-8021302b6e59',true,'admin','${create_date}')`;
      valueStringList.push(valueString);
    });
    let strValueStringList = valueStringList.toString();
    var sql_insert = `INSERT INTO timeticket_trans_table (timeticket_trans_time,timeticket_trans_date,employee_uuid,company_uuid,branch_uuid,is_active,create_by,create_date) VALUES ${strValueStringList}`;
    await pool.query(sql_insert);
    return { message: "ok" };
  } catch (e) {
    throw new Error(e.message);
  }
};
let getTicketModel = (employee_code, json_list) => {
  let model = {};
  json_list.forEach((item) => {
    if (item.employee_code == employee_code) {
      model = item;
    }
  });
  return model;
};
module.exports = {
  list,
  create,
  edit,
  view,
  del,
  dropdown,
  revisiontime,
  importTimticket,
};
