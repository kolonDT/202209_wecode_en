const express = require("express");
const surveypageController = require("../controllers/surveypageController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth");

const router = express.Router();

router.get(
  "/:surveyId",
  validateToken,
  errorHandler(surveypageController.getSurveyPageData)
);

module.exports = {
  router,
};
