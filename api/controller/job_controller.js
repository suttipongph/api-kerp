const jobService = require("../services/job_service");
// const confirmOrderService = require("../services/confirm_order_service");
// const makerService = require("../services/maker_service");
// const productionService = require("../services/production_service");
const respons = require("../shared/tools/respons_handler");
let createJobTable = async (req, res) => {
  try {
    res.status(200).json(await jobService.createJobTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getJobTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await jobService.getJobTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editJobTable = async (req, res) => {
  try {
    res.status(200).json(await jobService.editJobTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteJobTable = async (req, res) => {
  try {
    res.status(200).json(await jobService.deleteJobTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getJobTableById = async (req, res) => {
  try {
   res.status(200).json(await jobService.getJobTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
// const getConfirmOrderDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await confirmOrderService.getConfirmOrderDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
// const getMakerDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await makerService.getMakerDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
// const getProductionDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await productionService.getProductionDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
module.exports = {
  getJobTableList,
  getJobTableById,
  createJobTable,
  editJobTable,
  deleteJobTable,
  // getConfirmOrderDropdown,
  // getMakerDropdown,
  // getProductionDropdown,
};
