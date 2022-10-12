const express = require("express");
const statisticController = require("../controllers/statisticController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get(
  "/sum/:surveyId",
  validateToken,
  errorHandler(statisticController.countSumOfParticipation)
);

router.get(
  "/subjective/:surveyId",
  validateToken,
  errorHandler(statisticController.makeDataForStatSub)
);

router.get(
  "/multiple/:surveyId",
  validateToken,
  errorHandler(statisticController.makeDataForStatMulti)
);

router.get(
  "/phone/:surveyId",
  validateToken,
  errorHandler(statisticController.getPhoneAndName)
);

module.exports = {
  router,
};
