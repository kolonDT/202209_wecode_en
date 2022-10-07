const statisticDao = require("../models/statisticDao");
const error = require("../middlewares/errorConstructor");

const countSumOfParticipation = async (surveyId) => {
  if (Object.is(Number(surveyId), NaN)) {
    throw new error(`surveyId: '${surveyId}', NOT_A_NUMBER`, 400);
  }

  const result = await statisticDao.getSumParticipationSurvey(surveyId);
  return result[0];
};

const checkToSubjective = (val) => {
  if (Object.hasOwn(val, "answer")) {
    return val.answer;
  } else if (Object.hasOwn(val, "answers")) {
    return val.answers;
  }
};

const makeDataForStat = async (surveyId) => {
  const questions = await statisticDao.getFormDataForQuestion(surveyId);
  const opinions = await statisticDao.getOpinionResult(surveyId);

  const opinionArr = [];
  const temp1 = {};
  const result = [];

  for (let val of opinions) {
    opinionArr.push(JSON.parse(val.result).filter(Boolean));
  }

  const que = JSON.parse(questions[0].form_data).filter((val) => {
    return !Object.hasOwn(val, "file");
  });
  console.log(opinionArr, que);
  for (let i = 0; i < opinionArr.length; i++) {
    opinionArr[i].forEach((val, x) => {
      if (checkToSubjective(val)) {
        const question = que[x]["question"];
        const answer = val["answer"] || val["answers"];
        temp1[question] =
          temp1[question] === undefined
            ? [answer]
            : [...temp1[question], answer];
      }
    });
  }

  const key = Object.keys(temp1);
  const value = Object.values(temp1);
  const size = key.length;

  for (let i = 0; i < size; i++) {
    const temp2 = {};
    temp2["id"] = i + 1;
    temp2["question"] = key[i];
    temp2["answer"] = value[i];
    result.push(temp2);
  }

  return result;
};

module.exports = {
  countSumOfParticipation,
  makeDataForStat,
};
