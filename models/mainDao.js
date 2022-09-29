const { database } = require("./database");

const error = require("../middlewares/errorConstructor");

const getCount = async (adminPkId) => {
  try {
    return await database.query(
      `
      SELECT 
        COUNT(id) AS surveycount
      FROM survey
      WHERE survey.admin_id = ?`,
      [adminPkId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getAllList = async (adminPkId) => {
  try {
    return await database.query(
      `
      SELECT 
        id,
        DATE_FORMAT(start_date, '%Y%m%d') AS start_date,
        DATE_FORMAT(end_date, '%Y%m%d') AS end_date,
        survey_status_id
      FROM survey
      WHERE survey.admin_id = ?
      AND NOT survey_status_id = 3`,
      [adminPkId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const updateSurveyStatus = async (statusId, surveyId) => {
  try {
    await database.query(
      `
      UPDATE 
        survey
      SET survey_status_id = ? 
      WHERE id = ?`,
      [statusId, surveyId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getList = async (startPageNo, limit, adminPkId) => {
  try {
    return await database.query(
      `
      SELECT 
        survey.id,
        name,
        status,
        DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date,
        DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date,
        COUNT(opinion.id) AS count
      FROM survey
      INNER JOIN survey_status 
      ON survey_status_id = survey_status.id
      LEFT JOIN opinion 
      ON survey.id = opinion.survey_id
      WHERE survey.admin_id = ?
      GROUP BY survey.id
      ORDER BY survey_status_id, survey.id DESC
      LIMIT ?, ?`,
      [adminPkId, startPageNo, limit]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  getCount,
  getAllList,
  updateSurveyStatus,
  getList,
};
