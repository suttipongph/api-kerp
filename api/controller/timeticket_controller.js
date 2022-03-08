const timeticketService = require("../services/timeticket_service");
const employeeService = require("../services/employee_service");
const departmentService = require("../services/department_service");
const positionService = require("../services/position_service");
const job_transService = require("../services/job_trans_service");
const jobService = require("../services/job_service");
const respons = require("../shared/tools/respons_handler");
const DocStatuservice = require("../services/document_status_service");
const RevisionTimeTransservice = require("../services/revision_time_trans_service");
const pool = require("../../db");

let createTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticketService.createTimeticketTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getTimeticketTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticketService.getTimeticketTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticketService.editTimeticketTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteTimeticketTable = async (req, res) => {
  try {
    res.status(200).json(await timeticketService.deleteTimeticketTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getTimeticketTableById = async (req, res) => {
  try {
    res.status(200).json(await timeticketService.getTimeticketTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDepartmentDropdown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await departmentService.getDepartmentDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getPositionDropdown = async (req, res) => {
  try {
    res.status(200).json(await positionService.getPositionDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let createJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.createJobTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobTransTableList = async (req, res) => {
  try {
    res.status(200).json(await job_transService.getJobTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.editJobTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobTransTable = async (req, res) => {
  try {
    res.status(200).json(await job_transService.deleteJobTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobTransTableById = async (req, res) => {
  try {
    res.status(200).json(await job_transService.getJobTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getJobDropdown = async (req, res) => {
  try {
    res.status(200).json(await jobService.getJobDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getInitialDataJobTrans = async (req, res) => {
  try {
    res
      .status(200)
      .json(await job_transService.getInitialDataJobTrans(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

const getTimeticketInitialData = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticketService.getTimeticketInitialData(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getRequestRevitionTimeTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(await timeticketService.getRequestRevitionTimeTableById(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropDown = async (req, res) => {
  try {
    res
      .status(200)
      .json(await DocStatuservice.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const createRevitionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.createRevisionTimeTransTable(req, res)
      );
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
const getRevisionTimeTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.getRevisionTimeTransTableList(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const postRevisionTime = async (req, res) => {
  try {
    res
      .status(200)
      .json(await RevisionTimeTransservice.postRevisionTime(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const getRevisionTimeTransTableById = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.getRevisionTimeTransTableById(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const getInitialDataRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.getInitialDataRevisionTimeTransTable(
          req,
          res
        )
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const editRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.editRevisionTimeTransTable(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
const deleteRevisionTimeTransTable = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await RevisionTimeTransservice.deleteRevisionTimeTransTable(req, res)
      );
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};

let importTimeticketTable = async (req, res) => {
  let key = [
    "employee_uuid",
    "department_uuid",
    "position_uuid",
    "timeticket_start_nt_1",
    "company_uuid",
    "branch_uuid",
    "date",
    "is_active",
  ];
  for (let i = 0; i < req.body.length; i++) {
    var words = req.body[i].time_stamp.split("/").join("-").split(" ");
    var arrdate = words[0].split("-").reverse().join("-");
    let sql =
      "INSERT INTO timeticket_table ( " +
      key.toString() +
      " ) VALUES ('" +
      req.body[i].employee_uuid +
      "', '" +
      req.body[i].department_uuid +
      "','" +
      req.body[i].position_uuid +
      "','" +
      words[1] +
      ":00" +
      "','" +
      req.body[i].company_uuid +
      "','" +
      req.body[i].branch_uuid +
      "','" +
      arrdate +
      " 00:00:00" +
      "', TRUE );";
    let result = await pool.query(sql);
  }
  res.status(200).json({ status: "succses" });
};

let importTimticket = async (req, res) => {
  try {
    res.status(200).json(await timeticketService.importTimticket(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let assignTime = (rows, modelList) => {
  let rowData = rows;
  rowData.forEach((item) => {
    item["time_stamp"] = getTimeStamp(item["employee_code"], modelList);
  });
  return rowData;
};

let getTimeStamp = (machineId, modelList) => {
  let timeStamp = "";
  modelList.forEach((item) => {
    if (item["machineId"] == machineId) {
      timeStamp = item["time_stamp"];
    }
  });
  return timeStamp;
};

module.exports = {
  getTimeticketTableList,
  getTimeticketTableById,
  createTimeticketTable,
  editTimeticketTable,
  deleteTimeticketTable,
  getEmployeeDropdown,
  getDepartmentDropdown,
  getPositionDropdown,
  getJobTransTableList,
  getJobTransTableById,
  createJobTransTable,
  editJobTransTable,
  deleteJobTransTable,
  getJobDropdown,
  getInitialDataJobTrans,
  getTimeticketInitialData,
  getRequestRevitionTimeTableById,
  getDocumentStatusDropDown,
  createRevitionTimeTransTable,
  getRevisionTimeTransTableList,
  postRevisionTime,
  getRevisionTimeTransTableById,
  getInitialDataRevisionTimeTransTable,
  editRevisionTimeTransTable,
  deleteRevisionTimeTransTable,
  importTimeticketTable,
  importTimticket,
};
