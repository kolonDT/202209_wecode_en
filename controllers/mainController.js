const mainService = require("../services/mainService");
const error = require("../middlewares/errorConstructor");

const getList = async (req, res) => {
  const adminPkId = req.decoded.id;
  const pageNo = Number(req.query.pageNo);
  const limit = Number(req.query.limit);
  if (!pageNo || !limit) {
    throw new error("pageNo or limit must be number", 400);
  }
  const mainPageList = await mainService.getList(pageNo, limit, adminPkId);
  const mainPageCount = await mainService.getMainCount(adminPkId);
  res.status(200).json({ mainPageList, mainPageCount });
};

const getOptionList = async (req, res) => {
  const adminPkId = req.decoded.id;
  const searchWord = req.query.search;
  const filterWord = req.query.filter;
  const pageNo = Number(req.query.pageNo);
  const limit = Number(req.query.limit);
  if (!pageNo || !limit) {
    throw new error("pageNo or limit must be number", 400);
  }
  const mainPageList = await mainService.getOptionList(
    adminPkId,
    searchWord,
    filterWord,
    pageNo,
    limit
  );
  const mainPageCount = await mainService.getOptionCount(
    adminPkId,
    searchWord,
    filterWord
  );
  res.status(200).json({ mainPageList, mainPageCount });
};

const getForm = async (req, res) => {
  const formId = req.params.id;
  const formData = await mainService.getForm(formId);
  res.status(200).json({ formData });
};

const quitSurvey = async (req, res) => {
  const adminPkId = req.decoded.id;
  const surveyId = req.params.id;
  await mainService.quitSurvey(adminPkId, surveyId);
  res.status(200).json({ message: "udpate success" });
};

module.exports = {
  getList,
  getForm,
  getOptionList,
  quitSurvey,
};
