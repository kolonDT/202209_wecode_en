const express = require("express");
const editorController = require("../controllers/editorController");
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require("../middlewares/auth.js");
const upload = require("../middlewares/imageUploader");

const router = express.Router();

router.post("/made", validateToken, errorHandler(editorController.madeEditor));

router.post(
  "/image",
  validateToken,
  upload.upload.single("image"),
  errorHandler(editorController.imageUploader)
);

router.get(
  "/image/:surveyId",

  errorHandler(editorController.imageSender)
);

module.exports = {
  router,
};
