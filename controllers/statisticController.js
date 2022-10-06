const statisticService = require("../services/statisticService");
const error = require("../middlewares/errorConstructor");

const countSumOfParticipation = async (req, res) => {
  if (!req.params) {
    throw new error(`req.params: ${req.params}`, 400);
  }

  const { surveyId } = req.params;
  const result = await statisticService.countSumOfParticipation(surveyId);

  res.status(200).json(result);
};

const makeDataForStatSub = async (req, res) => {
  const { surveyId } = req.params;
  const result = await statisticService.makeDataForStat(surveyId);
  res.status(200).json(result);
};

module.exports = {
  countSumOfParticipation,
  makeDataForStatSub,
};
