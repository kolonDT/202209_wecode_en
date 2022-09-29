const linkService = require("../services/linkService");
const error = require("../middlewares/errorConstructor");

const getLink = async (req, res) => {
  const surveyId = Number(req.params.id);
  if (!surveyId) {
    throw new error("surveyId must be number", 400);
  }
  await linkService.checkSurveyId(surveyId);
  const surveyLink = await linkService.getLink(surveyId);
  res.status(200).json({ surveyLink });
};

module.exports = {
  getLink,
};
