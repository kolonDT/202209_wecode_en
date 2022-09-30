const editorService = require("../services/editorService");
const error = require("../middlewares/errorConstructor");
const fs = require("fs");

const madeEditor = async (req, res) => {
  const regex = /\d{4}-\d{2}-\d{2}/;
  const adminPkId = req.decoded.id;
  const {
    formData,
    surveyName,
    startDate,
    endDate,
    anonymousAllow,
    duplicationAllow,
    landingUrl,
  } = req.body;
  if (!formData || !surveyName) {
    throw new error("KEY ERROR", 400);
  }
  if (!regex.test(startDate) || !regex.test(endDate)) {
    throw new error("date FORM ERROR", 400);
  }
  if (anonymousAllow && anonymousAllow !== 1 && anonymousAllow !== 0) {
    throw new error("anonymousAllow KEY ERROR", 400);
  }
  if (duplicationAllow && duplicationAllow !== 1 && duplicationAllow !== 0) {
    throw new error("duplicationAllow KEY ERROR", 400);
  }
  const formId = await editorService.makeForm(formData);
  if (typeof formId !== "number") {
    throw new error("formId KEY ERROR", 400);
  }
  const surveyLink = await editorService.makeLink(
    adminPkId,
    formId,
    surveyName,
    startDate,
    endDate,
    anonymousAllow,
    duplicationAllow,
    landingUrl
  );
  res.status(201).json({ surveyLink });
};

const imageUploader = async (req, res) => {
  const imageLocation = `./uploads/${req.file.filename}`;
  editorService.setImage(imageLocation);
  res.status(200).json({ message: "success" });
};

const imageSender = async (req, res) => {
  const absPath = await editorService.getImage(req.params.formId);

  res.sendFile(`${absPath}`, () => {
    fs.unlink(`${absPath}`, () => {});
  });
};

module.exports = {
  madeEditor,
  imageUploader,
  imageSender,
};
