const { database } = require("./database");

const getSumParticipationSurvey = async (surveyId) => {
  return await database.query(
    `
    SELECT COUNT(opinion.id) as count,
    survey.name,
    DATE_FORMAT(start_date, "%Y-%m-%d") as start_date, 
    DATE_FORMAT(end_date, "%Y-%m-%d") as end_date, 
    survey_status.status as status
    FROM survey 
    LEFT JOIN opinion
    ON survey.id = opinion.survey_id
    JOIN survey_status
    ON survey.survey_status_id = survey_status.id
    WHERE survey.id = ?
    `,
    [surveyId]
  );
};

const getOpinionResult = async (surveyId) => {
  return await database.query(
    `
    SELECT result 
    FROM opinion 
    WHERE opinion.survey_id = ?
    `,
    [surveyId]
  );
};

const getFormDataForQuestion = async (surveyId) => {
  return await database.query(
    `
    SELECT form_data 
    FROM form 
    WHERE id= (SELECT form_id
    FROM survey 
    WHERE survey.id = ?)
  `,
    [surveyId]
  );
};

const setPhoneAndAgreement = async (phone, agreement) => {
  return await database.query(
    `
    INSERT INTO opinion (
      phone, agreement
    )VALUES (
      ?,?
    )
    `,
    [phone, agreement]
  );
};

const getPhone = async (surveyId) => {
  return await database.query(
    `
    SELECT phone 
    FROM opinion
    WHERE survey_id = ?
    `,
    [surveyId]
  );
};

module.exports = {
  getSumParticipationSurvey,
  getOpinionResult,
  getFormDataForQuestion,
  setPhoneAndAgreement,
  getPhone,
};
