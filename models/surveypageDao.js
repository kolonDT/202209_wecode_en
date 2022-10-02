const { database } = require("./database");

const getSurveyPageData = async (surveyId) => {
  return await database.query(
    `
    SELECT 
    form.form_data as formData, 
    survey.duplication_allow as duplicationAllow, 
    survey.anonymous_allow as anonymousAllow,
    survey.start_date as startDate,
    survey.end_date as endDate,
    survey.name
    FROM form
    JOIN survey 
    ON form.id = survey.form_id
    WHERE survey.id = ?
    `,
    [surveyId]
  );
};

const checkDuplicateParticipate = async (phone) => {
  const result = await database.query(
    `
        SELECT EXISTS (
            SELECT phone
            FROM opinion
            WHERE opinion.phone = ?
        )
        `,
    [phone]
  );
  return Number(Object.values(result[0])[0]);
};

module.exports = {
  getSurveyPageData,
  checkDuplicateParticipate,
};
