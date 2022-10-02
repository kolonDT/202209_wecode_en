const express = require("express");
const surveypageController = require("../controllers/surveypageController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get("/:surveyId", errorHandler(surveypageController.getSurveyPageData));

router.get(
  "/check/:phone",
  errorHandler(surveypageController.checkDuplicateParticipate)
);

module.exports = {
  router,
};
