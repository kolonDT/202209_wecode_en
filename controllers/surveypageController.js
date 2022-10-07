const error = require("../middlewares/errorConstructor");
const surveypageService = require("../services/surveypageService");

const getSurveyPageData = async (req, res) => {
  const surveyId = Number(req.params.surveyId);

  if (!surveyId || Object.is(surveyId, NaN)) {
    throw new error("invalid_value", 400);
  }

  const result = await surveypageService.getSurveyPageData(surveyId);
  res.status(200).json(result);
};

const checkDuplicateParticipate = async (req, res) => {
  const phone = req.params.phone;

  if (!phone) {
    throw new error("invalid_value", 400);
  }

  const result = await surveypageService.checkDuplicateParticipate(
    phone.match(/[0-9]/g).join("")
  );
  const value = result === 1 ? true : false;
  res.status(200).json({ value });
};

module.exports = {
  getSurveyPageData,
  checkDuplicateParticipate,
};
