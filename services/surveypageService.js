const surveypageDao = require("../models/surveypageDao");

const getSurveyPageData = async (surveyId) => {
  return await surveypageDao.getSurveyPageData(surveyId);
};

module.exports = {
  getSurveyPageData,
};
