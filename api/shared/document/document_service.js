const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
var docxConverter = require("docx-pdf");
const { promisify } = require("bluebird");
const libre = require("libreoffice-convert");
const libreConvert = promisify(libre.convert);
const path = require("path");
let createDocument = async (req, res, template_ori, datamodel) => {
  try {
    const template = template_ori.split(",")[1];

    const model_name = datamodel.model_name;
    fs.writeFileSync(
      "import_file/" + model_name + "Template.docx",
      template,
      "base64",
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    if (fs.existsSync("import_file/" + model_name + "Template.docx")) {
    } else {
      console.log("fileNotExit");
    }
    const content = fs.readFileSync(
      "import_file/" + model_name + "Template.docx",
      "binary",
      function (error) {
        console.log("error", error);
        if (error) {
          return console.log(error);
        }
      }
    );
    const zip = new PizZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);
    doc.setData(datamodel);
    doc.render();
    const buf = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync("" + model_name + ".docx", buf);
    res.header["File-Name"] = "CustomFileName";
    res.download("" + model_name + ".docx", function (err) {
      if (err) {
        console.log("error ", err); // Check error if you want
      }
      fs.unlink("" + model_name + ".docx", function () {
        console.log("File " + model_name + ".docx was deleted"); // Callback
      });
      fs.unlink("" + model_name + ".pdf", function () {
        console.log("File " + model_name + ".pdf was deleted"); // Callback
      });
      fs.unlink("import_file/" + model_name + "Template.docx", function () {
        console.log("File " + model_name + "Template.docx was deleted"); // Callback
      });
    });
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

module.exports = {
  createDocument,
};
