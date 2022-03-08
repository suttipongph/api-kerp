const subscribeService = require("../services/subscribe_service");
const subscribe_transService = require("../services/subscribe_trans_service");
const featureService = require("../services/feature_service");
const respons = require("../shared/tools/respons_handler");
let createSubscribeTable = async (req, res) => {
  try {
    res.status(200).json(await subscribeService.createSubscribeTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSubscribeTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await subscribeService.getSubscribeTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSubscribeTable = async (req, res) => {
  try {
    res.status(200).json(await subscribeService.editSubscribeTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSubscribeTable = async (req, res) => {
  try {
    res.status(200).json(await subscribeService.deleteSubscribeTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSubscribeTableById = async (req, res) => {
  try {
   res.status(200).json(await subscribeService.getSubscribeTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
let createSubscribeTransTable = async (req, res) => {
  try {
    res.status(200).json(await subscribe_transService.createSubscribeTransTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSubscribeTransTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.getSubscribeTransTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSubscribeTransTable = async (req, res) => {
  try {
    res.status(200).json(await subscribe_transService.editSubscribeTransTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSubscribeTransTable = async (req, res) => {
  try {
    res.status(200).json(await subscribe_transService.deleteSubscribeTransTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSubscribeTransTableById = async (req, res) => {
  try {
   res.status(200).json(await subscribe_transService.getSubscribeTransTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getSubscribeDropdown = async (req, res) => {
  try {
    res.status(200).json(await subscribeService.getSubscribeDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getFeatureDropdown = async (req, res) => {
  try {
    res.status(200).json(await featureService.getFeatureDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getSubscribeTableList,
  getSubscribeTableById,
  createSubscribeTable,
  editSubscribeTable,
  deleteSubscribeTable,
  getSubscribeTransTableList,
  getSubscribeTransTableById,
  createSubscribeTransTable,
  editSubscribeTransTable,
  deleteSubscribeTransTable,
  getSubscribeDropdown,
  getFeatureDropdown,
};
