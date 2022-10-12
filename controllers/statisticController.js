const statisticService = require("../services/statisticService");

const countSumOfParticipation = async (req, res) => {
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

const getPhoneAndName = async (req, res) => {
  const { surveyId } = req.params;
  const result = await statisticService.getPhoneAndName(surveyId);
  res.status(200).json(result);
};

module.exports = {
  countSumOfParticipation,
  makeDataForStatSub,
  makeDataForStatMulti,
  getPhoneAndName,
};
