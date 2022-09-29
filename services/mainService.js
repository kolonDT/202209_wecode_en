const mainDao = require("../models/mainDao");

const error = require("../middlewares/errorConstructor");

const getCount = async (adminPkId) => {
  const getCount = await mainDao.getCount(adminPkId);
  return getCount[0].surveycount;
};

const getList = async (pageNo, limit, adminPkId) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit, adminPkId);
  return getList;
};

const getForm = async (formId) => {
  const checkFormId = await mainDao.checkFormId(formId);
  if (checkFormId[0].RESULT === "0") {
    throw new error("formId KEY ERROR", 400);
  }
  const getForm = await mainDao.getForm(formId);
  return getForm[0].form_data;
};

module.exports = {
  getCount,
  getList,
  getForm,
};
