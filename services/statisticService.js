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

const checkToMultiple = (val) => {
  if (Object.hasOwn(val, "select")) {
    return val.select;
  } else if (Object.hasOwn(val, "selects")) {
    return val.selects;
  }
};

const makeDataForStatSub = async (surveyId) => {
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
    temp2["answers"] = value[i];
    result.push(temp2);
  }

  return result;
};
let count = 0;
const makeDataForStatMulti = async (surveyId) => {
  const questions = await statisticDao.getFormDataForQuestion(surveyId);
  const opinions = await statisticDao.getOpinionResult(surveyId);

  const opinionArr = [];
  const temp1 = {};
  const temp2 = {};

  for (let val of opinions) {
    opinionArr.push(JSON.parse(val.result).filter(Boolean));
  }

  const que = JSON.parse(questions[0].form_data).filter((val) => {
    return !Object.hasOwn(val, "file");
  });

  for (let i = 0; i < opinionArr.length; i++) {
    opinionArr[i].forEach((val, x) => {
      if (checkToMultiple(val)) {
        const question = que[x]["question"];
        const option = que[x]["option"][0];
        const answer = val["select"] || val["selects"][0];
        temp1[question] =
          temp1[question] === undefined
            ? [answer]
            : [...temp1[question], answer];
        temp2[question] = option;
      }
    });
  }
  const result = [];

  const key = Object.keys(temp2);
  for (let val of key) {
    const ele = {};
    const data = [];
    temp2[val].forEach((element) => {
      const bascket = {};
      if (typeof temp1[val][0] === "object") {
        return;
      }
      bascket["name"] = element;
      temp1[val].forEach((value) => {
        if (typeof value !== "object") {
          if (element === value && bascket["value"] === undefined) {
            bascket["value"] = 1;
          } else if (element === value) {
            bascket["value"] = bascket["value"] + 1;
          } else {
            bascket["value"] = 0;
          }
        }
      });
      data.push(bascket);
    });

    temp2[val].forEach((value, i) => {
      const bascket = {};
      bascket["name"] = value;
      if (typeof temp1[val][0] === "object") {
        bascket["value"] = 0;
        temp1[val].forEach((element) => {
          if (element[i]) {
            bascket["value"] += 1;
          }
        });
      }
      if (typeof temp1[val][0] === "object") {
        data.push(bascket);
      }
    });

    ele["question"] = val;
    ele["data"] = data;
    result.push(ele);
  }
  return result;
};

module.exports = {
  countSumOfParticipation,
  makeDataForStatSub,
  makeDataForStatMulti,
};
