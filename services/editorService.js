const editorDao = require("../models/editorDao");
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
  const surveyLink = `http://frontip:3000/user/${surveyId}`;
  await editorDao.SetSurveyLink(surveyId, surveyLink);
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

module.exports = {
  makeForm,
  makeLink,
  setImage,
  getImage,
};
