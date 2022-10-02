const opinionDao = require("../models/opinionDao");
const error = require("../middlewares/errorConstructor");

const setOpinion = async (surveyId, result, phone, agreement) => {
  await opinionDao.setOpinion(surveyId, result, phone, agreement);
};

module.exports = {
  setOpinion,
};
