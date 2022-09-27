const opinionDao = require("../models/opinionDao");

const setOpinion = async (surveyId, result, phone, agreement) => {
  await opinionDao.setOpinion(surveyId, result, phone, agreement);
};

module.exports = {
  setOpinion,
};
