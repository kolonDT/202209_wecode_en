const express = require("express");
const adminController = require("../controllers/adminController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.post("/login", errorHandler(adminController.login));

module.exports = {
  router,
};
