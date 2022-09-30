const error = require("../middlewares/errorConstructor");
const surveypageService = require("../services/surveypageService");

const getSurveyPageData = async (req, res) => {
  const surveyId = Number(req.params.surveyId);

  if (!surveyId || typeof surveyId !== "number") {
    throw new error("invalid_value", 400);
  }

  const result = await surveypageService.getSurveyPageData(surveyId);
  res.status(200).json({ result });
};

module.exports = {
  getSurveyPageData,
};
