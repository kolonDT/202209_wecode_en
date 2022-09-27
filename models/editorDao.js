const { database } = require("./database");

const makeForm = async (formData) => {
  await database.query(
    `
    INSERT INTO form(
      form_data
    ) VALUES (?)`,
    [formData]
  );
};

const getFormId = async () => {
  return await database.query(
    `
    SELECT 
      MAX(id) AS id 
    FROM form`
  );
};

const makeSurvey = async (
  adminPkId,
  formId,
  surveyName,
  startDate,
  endDate,
  anonymousAllow,
  duplicationAllow,
  landingUrl
) => {
  await database.query(
    `
    INSERT INTO survey(
      name,
      start_date,
      end_date,
      anonymous_allow,
      duplication_allow,
      landing_url,
      admin_id,
      form_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      surveyName,
      startDate,
      endDate,
      anonymousAllow,
      duplicationAllow,
      landingUrl,
      adminPkId,
      formId,
    ]
  );
};

module.exports = {
  makeForm,
  getFormId,
  makeSurvey,
};
