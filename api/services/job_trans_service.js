const model = require("../model/job_trans_model");
let createJobTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editJobTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteJobTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataJobTrans = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getJobTransTableList,
  getJobTransTableById,
  createJobTransTable,
  editJobTransTable,
  deleteJobTransTable,
  getJobTransDropdown,
  getInitialDataJobTrans,
};
