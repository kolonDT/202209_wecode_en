const mainDao = require("../models/mainDao");

const getList = async (pageNo, limit) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit);
  return getList;
};

module.exports = {
  getList,
};
