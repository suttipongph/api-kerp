const model = require("../model/worktime_trans_model");
let createWorktimeTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let createWorktimeTransTableByEmployeeUUID = async (req) => {
  try {
    console.log(req.body)
    const key = req.body.destination_employee_uuid;
    let worktimetrans = await model.viewEmp(req);
    worktimetrans.forEach(item => {
      item.employee_uuid = key
    });
    worktimetrans.forEach(item => {
      model.createCopy(item);
    });
    return worktimetrans[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWorktimeTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWorktimeTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorktimeTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataWorktimeTrans = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCopyWorkTimeTransByEmployeeOriginal = async (req) => {
  try {
    const wtt = await model.viewEmp(req);
    return{
      // employee_uuid: wtt.employee_uuid,
      start_time: wtt.start_time,
      end_time: wtt.end_time,
      worktime_type_uuid: wtt.worktime_type_uuid,
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWorktimeTransTableList,
  getWorktimeTransTableById,
  createWorktimeTransTable,
  editWorktimeTransTable,
  deleteWorktimeTransTable,
  getWorktimeTransDropdown,
  getInitialDataWorktimeTrans,
  getCopyWorkTimeTransByEmployeeOriginal,
  createWorktimeTransTableByEmployeeUUID
};
