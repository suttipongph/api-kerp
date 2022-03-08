const express = require("express");
const router = express.Router();
const controller = require("../../controller/position_trans_controller");
router.post("/getPositionTransTableList", controller.getPositionTransTableList);
router.post("/getPositionTransTableById", controller.getPositionTransTableById);
router.post("/createPositionTransTable", controller.createPositionTransTable);
router.post("/editPositionTransTable", controller.editPositionTransTable);
router.post("/deletePositionTransTable", controller.deletePositionTransTable);
router.post("/GetEmployeeDropdown", controller.getEmployeeDropdown);
router.post("/GetDepartmentDropdown", controller.getDepartmentDropdown);
router.post("/GetPositionDropdown", controller.getPositionDropdown);
router.post(
  "/HR/getPositionTransTableList",
  controller.getPositionTransTableHRList
);
router.post(
  "/Lead/getPositionTransTableList",
  controller.getPositionTransTableLeadList
);
router.post(
  "/Lead/getPositionTransTableById",
  controller.getPositionTransTableById
);
router.post(
  "/HR/getPositionTransTableById",
  controller.getPositionTransTableById
);
router.post("/Lead/getPositionDropDown", controller.getPositionDropdown);
router.post("/Lead/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/Lead/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post(
  "/Lead/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post("/HR/getPositionDropDown", controller.getPositionDropdown);
router.post("/HR/getDepartmentDropDown", controller.getDepartmentDropdown);
router.post("/HR/getEmployeeDropDown", controller.getEmployeeDropdown);
router.post(
  "/HR/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
//#region AdjustPosition
router.post(
  "/Action/AdjustPosition/getInitialData",
  controller.getInitialDataPostAdjustPosition
);
router.post(
  "/Action/ComplateAdjustPosition/getInitialData",
  controller.getInitialDataComplateAdjustPosition
);
router.post(
  "/Action/CancelAdjustPosition/getInitialData",
  controller.getInitialDataCancelAdjustPosition
);
router.post(
  "/Action/AdjustPosition/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/AdjustPosition/getDepartmentDropDown",
  controller.getDepartmentDropdown
);

router.post(
  "/Action/AdjustPosition/getPositionDropDown",
  controller.getPositionDropdown
);

router.post(
  "/Action/AdjustPosition/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Action/AdjustPosition/editAdjustPosition",
  controller.editPositionTransTable
);

router.post(
  "/Action/ComplateAdjustPosition/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/ComplateAdjustPosition/getDepartmentDropDown",
  controller.getDepartmentDropdown
);

router.post(
  "/Action/ComplateAdjustPosition/getPositionDropDown",
  controller.getPositionDropdown
);

router.post(
  "/Action/ComplateAdjustPosition/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Action/ComplateAdjustPosition/editAdjustPosition",
  controller.ComplateAdjustPosition
);

router.post(
  "/Action/CancelAdjustPosition/getEmployeeDropDown",
  controller.getEmployeeDropdown
);
router.post(
  "/Action/CancelAdjustPosition/getDepartmentDropDown",
  controller.getDepartmentDropdown
);

router.post(
  "/Action/CancelAdjustPosition/getPositionDropDown",
  controller.getPositionDropdown
);

router.post(
  "/Action/CancelAdjustPosition/getDocumentStatusDropDown",
  controller.getDocumentStatusDropdown
);
router.post(
  "/Action/CancelAdjustPosition/editAdjustPosition",
  controller.editCancelStatusAndCreateRejectTransTable
);
router.post("/Lead/editPositionTransTable", controller.editPositionTransTable);
router.post(
  "/Action/AdjustPosition/getFielChangeDropdown",
  controller.getFielChangeDropdown
);
router.post("/Lead/getFielChangeDropdown", controller.getFielChangeDropdown);
router.post("/HR/getFielChangeDropdown", controller.getFielChangeDropdown);
router.post("/HR/editPositionTransTable", controller.editPositionTransTable);
//#endregion
module.exports = router;
