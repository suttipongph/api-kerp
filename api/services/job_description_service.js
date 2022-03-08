const model = require("../model/job_description_model");
let createJobDescriptionTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobDescriptionTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editJobDescriptionTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteJobDescriptionTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobDescriptionTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getJobDescriptionDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getJobDescriptionTableList,
  getJobDescriptionTableById,
  createJobDescriptionTable,
  editJobDescriptionTable,
  deleteJobDescriptionTable,
  getJobDescriptionDropdown
};
