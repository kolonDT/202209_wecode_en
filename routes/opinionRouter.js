const express = require("express");
const opinionController = require("../controllers/opinionController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.post(
  "/:surveyId",

  errorHandler(opinionController.setOpinion)
);

module.exports = {
  router,
};
