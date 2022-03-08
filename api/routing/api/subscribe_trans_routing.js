const express = require("express");
const router = express.Router();
const controller = require("../../controller/subscribe_trans_controller");
router.post(
  "/getSubscribeTransTableList",
  controller.getSubscribeTransTableList
);
router.post(
  "/getSubscribeTransTableById",
  controller.getSubscribeTransTableById
);
router.post(
  "/createSubscribeTransTable",
  controller.createSubscribeTransTable
);
router.post(
  "/editSubscribeTransTable",
   controller.editSubscribeTransTable
);
router.post(
  "/deleteSubscribeTransTable",
  controller.deleteSubscribeTransTable
);
router.post(
  "/getSubscribeDropDown",
   controller.getSubscribeDropdown
);
router.post(
  "/getFeatureDropDown",
   controller.getFeatureDropdown
);
module.exports = router;
