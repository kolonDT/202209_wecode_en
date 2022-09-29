const mainDao = require("../models/mainDao");

const getCount = async (adminPkId) => {
  const getCount = await mainDao.getCount(adminPkId);
  return getCount[0].surveycount;
};

const getList = async (pageNo, limit, adminPkId) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit, adminPkId);
  return getList;
};

module.exports = {
  getCount,
  getList,
};
