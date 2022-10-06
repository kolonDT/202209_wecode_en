const surveypageDao = require("../models/surveypageDao");

const getSurveyPageData = async (surveyId) => {
  const value = await surveypageDao.getSurveyPageData(surveyId);
  const result = {
    formData: JSON.parse(value[0].formData),
    etc: {
      duplicationAllow: value[0].duplicationAllow,
      anonymousAllow: value[0].anonymousAllow,
      startDate: value[0].startDate,
      endDate: value[0].endDate,
      name: value[0].name,
    },
  };
  console.log(result);
  return result;
};

const checkDuplicateParticipate = async (phone) => {
  return await surveypageDao.checkDuplicateParticipate(phone);
};

module.exports = {
  getSurveyPageData,
  checkDuplicateParticipate,
};
