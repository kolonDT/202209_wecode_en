const surveypageService = require("../services/surveypageService");

const getSurveyPageData = async (req, res) => {
  const surveyId = Number(req.params.surveyId);

  const result = await surveypageService.getSurveyPageData(surveyId);
  res.status(200).json(result);
};

module.exports = {
  getSurveyPageData,
};
