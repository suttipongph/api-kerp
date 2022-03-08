const express = require("express");
const router = express.Router();
const controller = require("../../controller/suplier_controller");
router.post(
  "/getSuplierTableList",
  controller.getSuplierTableList
);
router.post(
  "/getSuplierTableById",
  controller.getSuplierTableById
);
router.post(
  "/createSuplierTable",
  controller.createSuplierTable
);
router.post("/editSuplierTable", controller.editSuplierTable);
router.post(
  "/deleteSuplierTable",
  controller.deleteSuplierTable
);
router.post("/GetContactPersonDropdown", controller.getContactPersonDropdown);
// router.post("/GetAddressTransDropdown", controller.getAddressTransDropdown);
// router.post("/GetSuplierCategoryDropdown", controller.getSuplierCategoryDropdown);
// router.post("/GetBankDropdown", controller.getBankDropdown);
router.post("/GetCompanyCategoryDropdown", controller.getCompanyCategoryDropdown);
// router.post("/GetSuplierBranchDropdown", controller.getSuplierBranchDropdown);
module.exports = router;
