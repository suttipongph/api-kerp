const model = require("../model/certificate_trans_model");
let createCertificateTransTable = async (req) => {
  try {
    return await model.create(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTransTableList = async (req) => {
  try {
    return await model.list(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let editCertificateTransTable = async (req) => {
  try {
    return await model.edit(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let deleteCertificateTransTable = async (req) => {
  try {
    return await model.del(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTransTableById = async (req) => {
  try {
    return await model.view(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getCertificateTransDropdown = async (req) => {
  try {
    return await model.dropdown(req);
  } catch (e) {
    throw new Error(e.message);
  }
};
let getInitialDataCertificateTrans = async (req) => {
  try {
    var certificate_trans = await model.getCertificateTransCode(req);
    if (certificate_trans) {
      var lastCertificateTransCode = certificate_trans.certificate_trans_code;
      let newlastCertificateTransCode = 1;
      let codeForMat = "";
      if (lastCertificateTransCode) {
        newlastCertificateTransCode = parseInt(lastCertificateTransCode) + 1;
      }
      if (newlastCertificateTransCode < 1000) {
        codeForMat = "0" + "0" + "0" + newlastCertificateTransCode;
        if (newlastCertificateTransCode < 100) {
          codeForMat = "0" + "0" + newlastCertificateTransCode;
          if (newlastCertificateTransCode < 10) {
            codeForMat = "0" + newlastCertificateTransCode;
          }
        }
      }
      return {
        certificate_trans_code: codeForMat,
        employee_uuid: req.body.primaryKey,
      };
    } else {
      return {
        certificate_trans_code: "01",
        employee_uuid: req.body.primaryKey,
      };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  getCertificateTransTableList,
  getCertificateTransTableById,
  createCertificateTransTable,
  editCertificateTransTable,
  deleteCertificateTransTable,
  getCertificateTransDropdown,
  getInitialDataCertificateTrans,
};
