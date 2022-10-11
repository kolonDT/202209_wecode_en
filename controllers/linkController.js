const linkService = require("../services/linkService");

const getLink = async (req, res) => {
  const surveyId = req.params.id;
  await linkService.checkSurveyId(surveyId);
  const surveyLink = await linkService.getLink(surveyId);
  res.status(200).json({ surveyLink });
};

module.exports = {
  getLink,
};
