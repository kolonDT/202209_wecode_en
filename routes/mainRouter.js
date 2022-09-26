const express = require("express");
const mainController = require("../controllers/mainController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.get("/list", errorHandler(mainController.getList));

module.exports = {
  router,
};
