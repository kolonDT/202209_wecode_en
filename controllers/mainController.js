const mainService = require("../services/mainService");
const error = require("../middlewares/errorConstructor");

const getCount = async (req, res) => {
  const adminPkId = req.decoded.id;
  const mainPageCount = await mainService.getCount(adminPkId);
  res.status(200).json({ mainPageCount });
};

const getList = async (req, res) => {
  const adminPkId = req.decoded.id;
  const pageNo = Number(req.query.pageNo);
  const limit = Number(req.query.limit);
  if (!pageNo || !limit) {
    throw new error("pageNo or limit must be number", 400);
  }
  const mainPageList = await mainService.getList(pageNo, limit, adminPkId);
  res.status(200).json({ mainPageList });
};

const getOptionList = async (req, res) => {
  const adminPkId = req.decoded.id;
  const searchWord = req.query.search;
  const filterWord = req.query.filter;
  if (!searchWord && !filterWord) {
    throw new error("key error", 400);
  }
  const mainPageList = await mainService.getOptionList(
    adminPkId,
    searchWord,
    filterWord
  );
  res.status(200).json({ mainPageList });
};

const getForm = async (req, res) => {
  const formId = req.params.id;
  const formData = await mainService.getForm(formId);
  res.status(200).json({ formData });
};

module.exports = {
  getCount,
  getList,
  getForm,
  getOptionList,
};
