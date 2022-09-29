const mainDao = require("../models/mainDao");

const getCount = async (adminPkId) => {
  const getCount = await mainDao.getCount(adminPkId);
  return getCount[0].surveycount;
};

const updateSurveyStatus = async (adminPkId) => {
  const getAllList = await mainDao.getAllList(adminPkId);
  let today = new Date();
  let date = Number(
    String(today.getFullYear()) +
      String(("0" + (today.getMonth() + 1)).slice(-2)) +
      String(("0" + today.getDate()).slice(-2))
  );
  getAllList.forEach((list) => {
    if (date < Number(list.start_date)) {
      mainDao.updateSurveyStatus(2, list.id);
    } else if (date > Number(list.end_date)) {
      mainDao.updateSurveyStatus(3, list.id);
    }
  });
};

const getList = async (pageNo, limit, adminPkId) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit, adminPkId);
  return getList;
};

module.exports = {
  getCount,
  updateSurveyStatus,
  getList,
};
