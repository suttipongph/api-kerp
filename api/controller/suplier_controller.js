const suplierService = require("../services/suplier_service");
const contactPersonService = require("../services/contact_person_service");
// const addressTransService = require("../services/address_trans_service");
// const suplierCategoryService = require("../services/suplier_category_service");
// const bankService = require("../services/bank_service");
const companyCategoryService = require("../services/company_category_service");
// const suplierBranchService = require("../services/suplier_branch_service");
// const respons = require("../shared/tools/respons_handler");
let createSuplierTable = async (req, res) => {
  try {
    res.status(200).json(await suplierService.createSuplierTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSuplierTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await suplierService.getSuplierTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSuplierTable = async (req, res) => {
  try {
    res.status(200).json(await suplierService.editSuplierTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSuplierTable = async (req, res) => {
  try {
    res.status(200).json(await suplierService.deleteSuplierTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSuplierTableById = async (req, res) => {
  try {
   res.status(200).json(await suplierService.getSuplierTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getContactPersonDropdown = async (req, res) => {
  try {
    res.status(200).json(await contactPersonService.getContactPersonDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
// const getAddressTransDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await addressTransService.getAddressTransDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
// const getSuplierCategoryDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await suplierCategoryService.getSuplierCategoryDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
// const getBankDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await bankService.getBankDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
const getCompanyCategoryDropdown = async (req, res) => {
  try {
    res.status(200).json(await companyCategoryService.getCompanyCategoryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
// const getSuplierBranchDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await suplierBranchService.getSuplierBranchDropdown(req, res));
//   } catch (e) {
//     respons.getErrorDropdown(e.message, req, res);
//   }
// };
module.exports = {
  getSuplierTableList,
  getSuplierTableById,
  createSuplierTable,
  editSuplierTable,
  deleteSuplierTable,
  getContactPersonDropdown,
  // getAddressTransDropdown,
  // getSuplierCategoryDropdown,
  // getBankDropdown,
  getCompanyCategoryDropdown,
  // getSuplierBranchDropdown,
};
