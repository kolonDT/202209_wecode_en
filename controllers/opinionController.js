const error = require("../middlewares/errorConstructor");
const opinionService = require("../services/opinionService");

const setOpinion = async (req, res) => {
  const { surveyId } = req.params;
  const { userData } = req.body;
  if (!surveyId) {
    throw new error("KEY_ERROR", 400);
  }

  await opinionService.setOpinion(Number(surveyId), JSON.stringify(userData));

  res.status(200).json({ message: "success" });
};

module.exports = {
  setOpinion,
};
