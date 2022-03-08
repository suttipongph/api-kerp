const pool = require("../../db");
const handler = require("../handler/position_trans_handler");
const documentStatusModel = require("../model/document_status_model");
const { RefType } = require("../shared/constants/enumConstants");
const {
  PrositionTransDocumentStatus,
} = require("../shared/constants/documentStatusId");
let create = async (req) => {
  try {
    let result = await pool.query(
      handler.getSqlCreate(req),
      handler.getValuesCreate(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let list = async (req) => {
  try {
    let result = await pool.query(handler.getSqlList(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let hrlist = async (req) => {
  try {
    var ref_type = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.POST;
    var documentStatusPost =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    let result = await pool.query(
      handler.getSqlRequestList(documentStatusPost, req)
    );
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let leadlist = async (req) => {
  try {
    var ref_type = RefType.PROSITION_TANS;
    var statusId = PrositionTransDocumentStatus.DRAFT;
    var documentStatusDrat =
      await documentStatusModel.getDocumentStatusByReftype(ref_type, statusId);

    let result = await pool.query(
      handler.getSqlRequestList(documentStatusDrat, req)
    );
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};
let edit = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlEdit(req),
      handler.getValuesEdit(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let del = async (req) => {
  try {
    const result = await pool.query(
      handler.getSqlDelete(),
      handler.getValuesDelete(req)
    );
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let view = async (req) => {
  try {
    const key = req.body.primaryKey;

    const result = await pool.query(handler.getSqlView(req), [key]);
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
let dropdown = async (req) => {
  try {
    let result = await pool.query(handler.getSqlDropdown(req));
    return handler.toDropdown(result.rows);
  } catch (e) {
    throw new Error(e.message);
  }
};
let lookup_ordering = async (req) => {
  try {
    const key = req;
    const result = await pool.query(handler.getSqlView(req), [key]);
    return result.rows[0];
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  list,
  create,
  edit,
  view,
  del,
  dropdown,
  hrlist,
  leadlist,
  lookup_ordering,
};
