const express = require("express");
const mainController = require("../controllers/mainController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get("/list", validateToken, errorHandler(mainController.getList));

router.get(
  "/option/list",
  validateToken,
  errorHandler(mainController.getOptionList)
);

router.get("/form/:id", validateToken, errorHandler(mainController.getForm));

router.post(
  "/list/:id",
  validateToken,
  errorHandler(mainController.quitSurvey)
);

module.exports = {
  router,
};
