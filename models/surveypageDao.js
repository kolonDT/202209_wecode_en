const { database } = require("./database");

const getSurveyPageData = async (surveyId) => {
  return await database.query(
    `
    SELECT form.form_data
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
