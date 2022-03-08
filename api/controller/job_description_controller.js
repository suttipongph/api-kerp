const job_descriptionService = require("../services/job_description_service");
const respons = require("../shared/tools/respons_handler");
let createJobDescriptionTable = async (req, res) => {
  try {
    res.status(200).json(await job_descriptionService.createJobDescriptionTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobDescriptionTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await job_descriptionService.getJobDescriptionTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobDescriptionTable = async (req, res) => {
  try {
    res.status(200).json(await job_descriptionService.editJobDescriptionTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobDescriptionTable = async (req, res) => {
  try {
    res.status(200).json(await job_descriptionService.deleteJobDescriptionTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobDescriptionTableById = async (req, res) => {
  try {
   res.status(200).json(await job_descriptionService.getJobDescriptionTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getJobDescriptionTableList,
  getJobDescriptionTableById,
  createJobDescriptionTable,
  editJobDescriptionTable,
  deleteJobDescriptionTable,
};
