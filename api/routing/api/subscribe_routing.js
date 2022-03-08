const express = require("express");
const router = express.Router();
const controller = require("../../controller/subscribe_controller");
router.post(
  "/getSubscribeTableList",
  controller.getSubscribeTableList
);
router.post(
  "/getSubscribeTableById",
  controller.getSubscribeTableById
);
router.post(
  "/createSubscribeTable",
  controller.createSubscribeTable
);
router.post(
  "/editSubscribeTable",
   controller.editSubscribeTable
);
router.post(
  "/deleteSubscribeTable",
  controller.deleteSubscribeTable
);

router.post(
  "/Info/SubscribeTrans/getSubscribeTransTableList",
  controller.getSubscribeTransTableList
);
router.post(
  "/Info/SubscribeTrans/getSubscribeTransTableById",
  controller.getSubscribeTransTableById
);
router.post(
  "/Info/SubscribeTrans/createSubscribeTransTable",
  controller.createSubscribeTransTable
);
router.post(
  "/Info/SubscribeTrans/editSubscribeTransTable",
   controller.editSubscribeTransTable
);
router.post(
  "/Info/SubscribeTrans/deleteSubscribeTransTable",
  controller.deleteSubscribeTransTable
);
router.post(
  "/Info/SubscribeTrans/getSubscribeDropDown",
   controller.getSubscribeDropdown
);
router.post(
  "/Info/SubscribeTrans/getFeatureDropDown",
   controller.getFeatureDropdown
);
module.exports = router;
