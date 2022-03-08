const customerService = require("../services/customer_service");
const customerBranchService = require("../services/customer_branch_service");
const customerCategoryService = require("../services/customer_category_service");
const addressService = require("../services/address_service");
// const creditTermService = require("../services/credit_term_service");
// const bankService = require("../services/bank_service");
const respons = require("../shared/tools/respons_handler");
let createCustomerTable = async (req, res) => {
  try {
    res.status(200).json(await customerService.createCustomerTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCustomerTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await customerService.getCustomerTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCustomerTable = async (req, res) => {
  try {
    res.status(200).json(await customerService.editCustomerTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCustomerTable = async (req, res) => {
  try {
    res.status(200).json(await customerService.deleteCustomerTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCustomerTableById = async (req, res) => {
  try {
   res.status(200).json(await customerService.getCustomerTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getCustomerBranchDropDown = async (req, res) => {
  try {
    res.status(200).json(await customerBranchService.getCustomerBranchDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getCustomerCategoryDropDown = async (req, res) => {
  try {
    res.status(200).json(await customerCategoryService.getCustomerCategoryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getAddressDropdown = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
// const getCreditTermDropdown = async (req, res) => {
//   try {
//     res.status(200).json(await creditTermService.getCreditTermDropdown(req, res));
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
const getInitialDataCustomer = async (req, res) => {
  try {
    res.status(200).json(await customerService.getInitialDataCustomer(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getCustomerTableList,
  getCustomerTableById,
  createCustomerTable,
  editCustomerTable,
  deleteCustomerTable,
  getCustomerBranchDropDown,
  getCustomerCategoryDropDown,
  getAddressDropdown,
  getInitialDataCustomer,
  // getCreditTermDropdown,
  // getBankDropdown,
};
