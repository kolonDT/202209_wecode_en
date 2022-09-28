const linkDao = require("../models/linkDao");

const error = require("../middlewares/errorConstructor");

const checkSurveyId = async (surveyId) => {
  const checkSurveyId = await linkDao.checkSurveyId(surveyId);
  if (checkSurveyId[0].RESULT === "0") {
    throw new error("surveyId KEY ERROR", 400);
  }
};

const getLink = async (surveyId) => {
  const surveyLink = await linkDao.getLink(surveyId);
  return surveyLink[0].surveyLink;
};

module.exports = {
  checkSurveyId,
  getLink,
};
