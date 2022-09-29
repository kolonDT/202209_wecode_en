const editorDao = require("../models/editorDao");
const fs = require("fs");
const path = require("path");

const makeForm = async (formData) => {
  await editorDao.makeForm(formData);
  const formId = await editorDao.getFormId(formData);
  return formId[0].id;
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
  const surveyLink = `http://localhost:8000/user/${surveyId}`;
  await editorDao.SetSurveyLink(surveyId, surveyLink);
  return surveyLink;
};

const setImage = async (imageLocation) => {
  const image = fs.readFileSync(imageLocation);
  await editorDao.setImage(image);
  fs.unlink(imageLocation, (result) => {});
};

const getImage = async (formId) => {
  const imageCode = await editorDao.getImage(formId);
  const filename = `${formId}.${Date.now()}.jpg`;
  fs.writeFileSync(`./images/${filename}`, imageCode[0].img);
  const absPath = path.resolve("./images", `${filename}`);
  return absPath;
};

module.exports = {
  makeForm,
  makeLink,
  setImage,
  getImage,
};
