const express = require("express");
const mainController = require("../controllers/mainController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get("/count", validateToken, errorHandler(mainController.getCount));

router.get("/list", validateToken, errorHandler(mainController.getList));

router.get("/form/:id", validateToken, errorHandler(mainController.getForm));

module.exports = {
  router,
};
