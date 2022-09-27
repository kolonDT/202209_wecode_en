const express = require("express");
const editorController = require("../controllers/editorController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.post("/made", validateToken, errorHandler(editorController.madeEditor));

module.exports = {
  router,
};
