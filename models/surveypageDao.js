const { database } = require("./database");

const getSurveyPageData = async (surveyId) => {
  return await database.query(
    `
    SELECT 
    form.form_data as formData, 
    survey.duplication_allow as duplicationAllow, 
    survey.anonymous_allow as anonymousAllow,
    DATE_FORMAT(start_date, "%Y-%m-%d") as startDate,
    DATE_FORMAT(end_date, "%Y-%m-%d") as endDate,
    survey.name,
    survey.landing_url as url
    FROM form
    JOIN survey 
    ON form.id = survey.form_id
    WHERE survey.id = ?
    `,
    [surveyId]
  );
};

module.exports = {
  getSurveyPageData,
};
