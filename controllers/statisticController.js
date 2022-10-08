const statisticService = require("../services/statisticService");
const error = require("../middlewares/errorConstructor");

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
  console.log(result[0].data);
  res.status(200).json(result);
};

const getPhone = async (req, res) => {
  const { surveyId } = req.params;
  const result = await statisticService.getPhone(surveyId);
  res.status(200).json(result);
};

module.exports = {
  countSumOfParticipation,
  makeDataForStatSub,
  makeDataForStatMulti,
  getPhone,
};
