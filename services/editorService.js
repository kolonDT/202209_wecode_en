const editorDao = require("../models/editorDao");

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

module.exports = {
  makeForm,
  makeLink,
};
