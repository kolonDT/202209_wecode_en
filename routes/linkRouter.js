const express = require("express");
const linkController = require("../controllers/linkController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get("/:id", validateToken, errorHandler(linkController.getLink));

module.exports = {
  router,
};
