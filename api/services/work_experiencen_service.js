const model = require("../model/work_experiencen_model");
const EmpModel = require("../model/employee_model");
let createWorkExperiencenTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorkExperiencenTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editWorkExperiencenTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteWorkExperiencenTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorkExperiencenTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getWorkExperiencenDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataOfWorkExperience = async (req) => {
  try {
    var emp = await EmpModel.view(req);

    return {
      employee_uuid: emp.employee_uuid,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getWorkExperiencenTableList,
  getWorkExperiencenTableById,
  createWorkExperiencenTable,
  editWorkExperiencenTable,
  deleteWorkExperiencenTable,
  getWorkExperiencenDropdown,
  getInitialDataOfWorkExperience,
};
