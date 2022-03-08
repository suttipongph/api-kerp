const supplierService = require("../services/supplier_service");
const contactPersonService = require("../services/contact_person_service");
const addressService = require("../services/address_service");
const supplierCategoryService = require("../services/supplier_category_service");
// const bankService = require("../services/bank_service");
const companyCategoryService = require("../services/company_category_service");
const supplierBranchService = require("../services/supplier_branch_service");
const respons = require("../shared/tools/respons_handler");
let createSupplierTable = async (req, res) => {
  try {
    res.status(200).json(await supplierService.createSupplierTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSupplierTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await supplierService.getSupplierTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSupplierTable = async (req, res) => {
  try {
    res.status(200).json(await supplierService.editSupplierTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSupplierTable = async (req, res) => {
  try {
    res.status(200).json(await supplierService.deleteSupplierTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSupplierTableById = async (req, res) => {
  try {
   res.status(200).json(await supplierService.getSupplierTableById(req));
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
const getAddressDropdown = async (req, res) => {
  try {
    res.status(200).json(await addressService.getAddressDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getSupplierCategoryDropdown = async (req, res) => {
  try {
    res.status(200).json(await supplierCategoryService.getSupplierCategoryDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
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
const getSupplierBranchDropdown = async (req, res) => {
  try {
    res.status(200).json(await supplierBranchService.getSupplierBranchDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
module.exports = {
  getSupplierTableList,
  getSupplierTableById,
  createSupplierTable,
  editSupplierTable,
  deleteSupplierTable,
  getContactPersonDropdown,
  getAddressDropdown,
  getSupplierCategoryDropdown,
  // getBankDropdown,
  getCompanyCategoryDropdown,
  getSupplierBranchDropdown,
};
