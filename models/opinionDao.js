const { database } = require("../models/database");

const setOpinion = async (surveyId, result, phone, agreement) => {
  await database.query(
    `
        INSERT INTO opinion 
            (survey_id, 
              result, 
              phone, 
              agreement)
        VALUES 
            (?,?,?,?)
    `,
    [surveyId, result, phone, agreement]
  );
};

module.exports = {
  setOpinion,
};
