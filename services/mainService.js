const mainDao = require("../models/mainDao");

const error = require("../middlewares/errorConstructor");

const getList = async (pageNo, limit, adminPkId) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit, adminPkId);
  return getList;
};

const getMainCount = async (adminPkId) => {
  const getMainCount = await mainDao.getMainCount(adminPkId);
  return getMainCount[0].count;
};

const getOptionList = async (
  adminPkId,
  searchWord,
  filterWord,
  pageNo,
  limit
) => {
  const startPageNo = pageNo * limit - limit;
  if (filterWord) {
    const filterList = await mainDao.getFilterList(
      adminPkId,
      filterWord,
      startPageNo,
      limit
    );
    return filterList;
  } else {
    const searchList = await mainDao.getSearchList(
      adminPkId,
      searchWord,
      startPageNo,
      limit
    );
    return searchList;
  }
};

const getOptionCount = async (adminPkId, searchWord, filterWord) => {
  if (filterWord) {
    const getFilterCount = await mainDao.getFilterCount(adminPkId, filterWord);
    return getFilterCount[0].count;
  } else {
    const getSearchCount = await mainDao.getSearchCount(adminPkId, searchWord);
    return getSearchCount[0].count;
  }
};

const getForm = async (formId) => {
  const checkFormId = await mainDao.checkFormId(formId);
  if (checkFormId[0].RESULT === "0") {
    throw new error("formId KEY ERROR", 400);
  }
  const getForm = await mainDao.getForm(formId);
  return getForm[0].form_data;
};

const quitSurvey = async (adminPkId, surveyId) => {
  const checkSurveyId = await mainDao.checkSurveyId(surveyId, adminPkId);
  console.log(checkSurveyId);
  if (checkSurveyId[0].RESULT === "0") {
    throw new error("surveyId KEY ERROR", 400);
  }
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + (today.getDate() - 1)).slice(-2);
  let yesterday = year + "-" + month + "-" + day;
  await mainDao.quitSurvey(yesterday, surveyId);
};

module.exports = {
  getList,
  getForm,
  getOptionList,
  getMainCount,
  getOptionCount,
  quitSurvey,
};
