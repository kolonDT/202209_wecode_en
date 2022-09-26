const mainDao = require("../models/mainDao");

const getList = async (pageNo, limit, adminPkId) => {
  const startPageNo = pageNo * limit - limit;
  const getList = await mainDao.getList(startPageNo, limit, adminPkId);
  return getList;
};

module.exports = {
  getList,
};
