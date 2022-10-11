const editorDao = require("../models/editorDao");
const path = require("path");
const fs = require("fs");

const makeForm = async (formData) => {
  await editorDao.makeForm(formData);
  const formId = await editorDao.getFormId(formData);
  return formId[0].id;
};

const deleteGarbageImage = async () => {
  const garbagePaths = await editorDao.findGarbageImage();

  if (garbagePaths.length === 0) {
    return;
  } else {
    garbagePaths.forEach((element) => {
      const path = element["img"];
      fs.unlink(path, () => {});
    });
    await editorDao.deleteGarbageImageRow();
  }
};

const makeLink = async (
  adminPkId,
  formId,
  surveyName,
  startDate,
  endDate,
  anonymousAllow,
  duplicationAllow,
  landingUrl
) => {
  await editorDao.makeSurvey(
    adminPkId,
    formId,
    surveyName,
    startDate,
    endDate,
    anonymousAllow,
    duplicationAllow,
    landingUrl
  );
  const surveyId = (await editorDao.getSurveyId())[0].id;
  const surveyLink = `http://10.133.28.182:3000/surveypage/${surveyId}`;
  await editorDao.SetSurveyLink(surveyId, surveyLink);
  await deleteGarbageImage();
  return surveyLink;
};

const setImage = async (imageLocation) => {
  const absPath = path.resolve(`${imageLocation}`);
  await editorDao.setImage(absPath);
};

const getImage = async (surveyId) => {
  const imagePath = await editorDao.getImage(surveyId);
  return imagePath;
};

const deleteSurvey = async (surveyId) => {
  editorDao.deleteSurvey(surveyId);
};

module.exports = {
  makeForm,
  makeLink,
  setImage,
  getImage,
  deleteSurvey,
};
