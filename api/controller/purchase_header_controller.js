const purchase_headerService = require("../services/purchase_header_service");
const employeeService = require("../services/employee_service");
const documentStatusService = require("../services/document_status_service");
const warehouseService = require("../services/warehouse_service");
const respons = require("../shared/tools/respons_handler");
const supplierService = require("../services/supplier_service");
const purchaseLineService = require("../services/purchase_line_service");
const pool = require("../../db");
let createPurchaseHeaderTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_headerService.createPurchaseHeaderTable(req));
  } catch (e) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getPurchaseHeaderTableList = async (req, res) => {
  try {
    res
      .status(200)
      .json(await purchase_headerService.getPurchaseHeaderTableList(req, res));
  } catch (e) {
    respons.getErrorList(e.message, req, res);
  }
};
let editPurchaseHeaderTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_headerService.editPurchaseHeaderTable(req));
  } catch (e) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deletePurchaseHeaderTable = async (req, res) => {
  try {
    res.status(200).json(await purchase_headerService.deletePurchaseHeaderTable(req));
  } catch (e) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getPurchaseHeaderTableById = async (req, res) => {
  try {
   res.status(200).json(await purchase_headerService.getPurchaseHeaderTableById(req));
  } catch (e) {
    respons.getErrorView(e.message, req, res);
  }
};
const getEmployeeDropdown = async (req, res) => {
  try {
    res.status(200).json(await employeeService.getEmployeeDropDown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getDocumentStatusDropdown = async (req, res) => {
  try {
    res.status(200).json(await documentStatusService.getDocumentStatusDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
const getWarehouseDropdown = async (req, res) => {
  try {
    res.status(200).json(await warehouseService.getWarehouseDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

const getSupplierDropDown = async (req, res) => {
  try {
    res.status(200).json(await supplierService.getSupplierDropdown(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};


const createPurchaseLineTable = async (req, res) => {
  try {
  let key = [
    "part_uuid",
    "purchase_code",
    "price_per_unit",
    "line_price",
    "amount",
    "company_uuid",
    "branch_uuid",
    "is_active"
  ]
  let sql = "SELECT * FROM purchase_header_table WHERE purchase_code = '"+  req.body.purchase_code +"' AND is_active = true "
  let resultrow = await pool.query(sql)
  if(resultrow.rowCount < 1){
    for(let i = 0; i < req.body.length; i++){
    let sql = "INSERT INTO purchase_line_table ( " 
      + key.toString() + " ) VALUES ('" 
      + req.body[i]["part_uuid"] + 
      "', '" 
      + req.body[i]["purchase_code"] + 
      "', '"
      + req.body[i]["unit_price"] + 
      "', '"
      + req.body[i]["price"] + 
      "', '"
      + req.body[i]["amount"] + 
      "', '"
      + req.body[i]["company_uuid"] +
      "', '"
      + req.body[i]["branch_uuid"] +
      "', TRUE)"
      let result = await pool.query(sql);
    }
  }
  
  res.status(200).json({ status: "succses" });
  }
  catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};


const getPurchaseLineTable = async (req, res) => {
  try {
    res.status(200).json(await purchaseLineService.getPurchaseLineTableList(req, res));
  } catch (e) {
    respons.getErrorDropdown(e.message, req, res);
  }
};



module.exports = {
  getPurchaseHeaderTableList,
  getPurchaseHeaderTableById,
  createPurchaseHeaderTable,
  editPurchaseHeaderTable,
  deletePurchaseHeaderTable,
  getEmployeeDropdown,
  getDocumentStatusDropdown,
  getWarehouseDropdown,
  getSupplierDropDown,
  createPurchaseLineTable,
  getPurchaseLineTable
};
