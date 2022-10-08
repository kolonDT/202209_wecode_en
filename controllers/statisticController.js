const statisticService = require("../services/statisticService");
const error = require("../middlewares/errorConstructor");

const countSumOfParticipation = async (req, res) => {
  if (!req.params) {
    throw new error(`req.params: ${req.params}`, 400);
  }
  const { surveyId } = req.params;
  const result = await statisticService.countSumOfParticipation(surveyId);

  return res.status(200).json(result);
};

const makeDataForStatSub = async (req, res) => {
  const { surveyId } = req.params;
  const result = await statisticService.makeDataForStatSub(surveyId);
  res.status(200).json(result);
};

const makeDataForStatMulti = async (req, res) => {
  const { surveyId } = req.params;
  const result = await statisticService.makeDataForStatMulti(surveyId);
  res.status(200).json(result);
};

module.exports = {
  countSumOfParticipation,
  makeDataForStatSub,
  makeDataForStatMulti,
};
