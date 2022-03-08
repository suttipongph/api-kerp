const express = require("express");
const router = express.Router();
const controller = require("../../controller/transfer_trans_controller");
router.post("/getTransferTransTableList", controller.getTransferTransTableList);
router.post("/getTransferTransTableById", controller.getTransferTransTableById);
router.post("/createTransferTransTable", controller.createTransferTransTable);
router.post("/editTransferTransTable", controller.editTransferTransTable);
router.post("/deleteTransferTransTable", controller.deleteTransferTransTable);
router.post("/GetPositionDropdown", controller.getPositionDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);

router.post(
  "/Hr/getTransferTransTableList",
  controller.getTransferTransTableList
);
router.post(
  "/Hr/getTransferTransTableById",
  controller.getTransferTransTableById
);
router.post(
  "/Hr/createTransferTransTable",
  controller.createTransferTransTable
);
router.post("/Hr/editTransferTransTable", controller.editTransferTransTable);

router.post("/Hr/getPositionDropdown", controller.getPositionDropdown);
router.post("/Hr/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Hr/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/Hr/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Hr/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post(
  "/Hr/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/PostAdjustTransfer/getInitialDataAdjustPostTransfer",
  controller.getInitialDataAdjustPostTransfer
);

router.post(
  "/Action/PostAdjustTransfer/getPositionDropdown",
  controller.getPositionDropdown
);
router.post(
  "/Action/PostAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustTransfer/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/PostAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/PostAdjustTransfer/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/PostAdjustTransfer/editAdjustTransfer",
  controller.editAdjustTransfer
);

router.post(
  "/Action/CancelAdjustTransfer/getInitialDataAdjustCancelTransfer",
  controller.getInitialDataAdjustCancelTransfer
);

router.post(
  "/Action/CancelAdjustTransfer/getPositionDropdown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CancelAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CancelAdjustTransfer/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CancelAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CancelAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CancelAdjustTransfer/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CancelAdjustTransfer/editAdjustTransfer",
  controller.editCancelTransferAndCreateRejectTrans
);
router.post(
  "/Lead/getTransferTransTableById",
  controller.getTransferTransTableById
);
router.post(
  "/Lead/getTransferTransTableList",
  controller.getTransferTransTableList
);
router.post("/Lead/editTransferTransTable", controller.editTransferTransTable);

router.post("/Lead/getPositionDropdown", controller.getPositionDropdown);
router.post("/Lead/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Lead/getEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/Lead/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/Lead/getDepartmentDropdown", controller.getDepartmentDropdown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);

router.post(
  "/Action/CompleteAdjustTransfer/getInitialDataAdjustCompleteTransfer",
  controller.getInitialDataAdjustCompleteTransfer
);

router.post(
  "/Action/CompleteAdjustTransfer/getPositionDropdown",
  controller.getPositionDropdown
);
router.post(
  "/Action/CompleteAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteAdjustTransfer/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CompleteAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteAdjustTransfer/getDepartmentDropdown",
  controller.getDepartmentDropdown
);
router.post(
  "/Action/CompleteAdjustTransfer/getDocumentStatusDropDown",
  controller.getDocumentStatusDropDown
);
router.post(
  "/Action/CompleteAdjustTransfer/editAdjustTransfer",
  controller.editTransferTransTableComplete
);
router.post(
  "/Action/PostAdjustTransfer/getFielChangeDropdown",
  controller.getFielChangeDropdown
);
router.post("/Lead/getFielChangeDropdown", controller.getFielChangeDropdown);
router.post("/Hr/getFielChangeDropdown", controller.getFielChangeDropdown);
module.exports = router;
