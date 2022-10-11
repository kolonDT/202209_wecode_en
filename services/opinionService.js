const opinionDao = require("../models/opinionDao");
const error = require("../middlewares/errorConstructor");

const setOpinion = async (surveyId, userData) => {
  if (Object.is(Number(surveyId), NaN) || !userData) {
    throw new error(`INVALID_INPUT`, 400);
  }

  const temp = JSON.parse(userData).filter(Boolean);
  let phone = null,
    agreement = null;
  for (let val of temp) {
    if (Object.hasOwn(val, "phone")) {
      phone = val.phone;
    }
    if (Object.hasOwn(val, "agreement")) {
      agreement = val.agreement;
    }
  }
  return await opinionDao.setOpinion(surveyId, userData, phone, agreement);
};

module.exports = {
  setOpinion,
};
