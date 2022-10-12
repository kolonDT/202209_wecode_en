const { database } = require("../models/database");
const error = require("../middlewares/errorConstructor");

const checkDuplicateParticipate = async (surveyId, phone) => {
  const isCheck = await database.query(
    `
      SELECT duplication_allow
      FROM survey
      WHERE survey.id = ?
    `,
    [surveyId]
  );
  if (isCheck) {
    const result = await database.query(
      `
        SELECT EXISTS (
            SELECT phone
            FROM opinion
            WHERE opinion.phone = ? AND survey_id = ?
        )
        `,
      [phone, surveyId]
    );
    return Number(Object.values(result[0])[0]);
  }
  return 0;
};

const setOpinion = async (surveyId, result, phone, agreement, name) => {
  const check = await checkDuplicateParticipate(surveyId, phone);
  if (check) {
    throw new error("already_exist_phone_number", 400);
  }

  await database.query(
    `
        INSERT INTO opinion 
            (survey_id, 
              result, 
              phone, 
              agreement,
              name2)
        VALUES 
            (?,?,?,?,?)
    `,
    [surveyId, result, phone, agreement, name]
  );
};

module.exports = {
  setOpinion,
};
