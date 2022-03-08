const featureService = require("../services/feature_service");
const respons = require("../shared/tools/respons_handler");
let createFeatureTable = async (req, res) => {
  try {
    res.status(200).json(await featureService.createFeatureTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getFeatureTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await featureService.getFeatureTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editFeatureTable = async (req, res) => {
  try {
    res.status(200).json(await featureService.editFeatureTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteFeatureTable = async (req, res) => {
  try {
    res.status(200).json(await featureService.deleteFeatureTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getFeatureTableById = async (req, res) => {
  try {
   res.status(200).json(await featureService.getFeatureTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
module.exports = {
  getFeatureTableList,
  getFeatureTableById,
  createFeatureTable,
  editFeatureTable,
  deleteFeatureTable,
};
