const error = require("../middlewares/errorConstructor");
const opinionService = require("../services/opinionService");

const setOpinion = async (req, res) => {
  const { surveyId } = req.params;
  const { result, phone, agreement } = req.body;

  if (
    !surveyId ||
    !result ||
    !phone ||
    (typeof agreement !== "boolean" && agreement !== null)
  ) {
    throw new error(
      `dev: surveyId ${surveyId}, result ${typeof result}, phone ${phone}, agreement ${agreement}`,
      400
    );
  }

  await opinionService.setOpinion(
    surveyId,
    result,
    phone.match(/[0-9]/g).join(""),
    agreement
  );

  res.status(200).json({ message: "success" });
};

module.exports = {
  setOpinion,
};
