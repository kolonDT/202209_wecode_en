const editorService = require("../services/editorService");
const error = require("../middlewares/errorConstructor");

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
<<<<<<< HEAD
=======
  if (anonymousAllow && anonymousAllow !== true && anonymousAllow !== false) {
    throw new error("anonymousAllow KEY ERROR", 400);
  }
  if (
    duplicationAllow &&
    duplicationAllow !== true &&
    duplicationAllow !== false
  ) {
    throw new error("duplicationAllow KEY ERROR", 400);
  }
>>>>>>> a408628 (feat:(modify2) image)
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
  res.status(201).json({ message: "success" });
};

const imageSender = async (req, res) => {
  const absPath = await editorService.getImage(req.params.formId);
  res.sendFile(`${absPath[0].img}`, () => {});
};

module.exports = {
  madeEditor,
  imageUploader,
  imageSender,
};
