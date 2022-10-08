const express = require("express");
const statisticController = require("../controllers/statisticController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get(
  "/sum/:surveyId",
  errorHandler(statisticController.countSumOfParticipation)
);

router.get(
  "/subjective/:surveyId",
  errorHandler(statisticController.makeDataForStatSub)
);

router.get(
  "/multiple/:surveyId",
  errorHandler(statisticController.makeDataForStatMulti)
);

module.exports = {
  router,
};
