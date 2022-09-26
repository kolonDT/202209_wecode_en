const express = require("express");
const mainController = require("../controllers/mainController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get("/list", validateToken, errorHandler(mainController.getList));

module.exports = {
  router,
};
