const mainService = require("../services/mainService");
const error = require("../middlewares/errorConstructor");

const getList = async (req, res) => {
  const pageNo = Number(req.query.pageNo);
  const limit = Number(req.query.limit);
  if (!pageNo || !limit) {
    throw new error("pageNo or limit must be number", 400);
  }
  const mainPageList = await mainService.getList(pageNo, limit);
  res.status(200).json({ mainPageList });
};

module.exports = {
  getList,
};
