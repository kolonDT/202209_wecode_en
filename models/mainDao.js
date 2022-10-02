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
        COUNT(opinion.id) AS count,
        survey_url AS surveyLink
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

const getSearchList = async (adminPkId, searchWord) => {
  try {
    return await database.query(
      `
      SELECT 
        survey.id,
        name,
        status,
        DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date,
        DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date,
        COUNT(opinion.id) AS count,
        survey_url AS surveyLink
      FROM survey
      INNER JOIN survey_status 
      ON survey_status_id = survey_status.id
      LEFT JOIN opinion 
      ON survey.id = opinion.survey_id
      WHERE survey.admin_id = ? AND
      name LIKE "%${searchWord}%"
      GROUP BY survey.id
      ORDER BY survey_status_id, survey.id DESC`,
      [adminPkId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getFilterList = async (adminPkId, filterWord) => {
  try {
    return await database.query(
      `
      SELECT 
        survey.id,
        name,
        status,
        DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date,
        DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date,
        COUNT(opinion.id) AS count,
        survey_url AS surveyLink
      FROM survey
      INNER JOIN survey_status 
      ON survey_status_id = survey_status.id
      LEFT JOIN opinion 
      ON survey.id = opinion.survey_id
      WHERE survey.admin_id = ? AND
      status = ?
      GROUP BY survey.id
      ORDER BY survey_status_id, survey.id DESC`,
      [adminPkId, filterWord]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const checkFormId = async (formId) => {
  try {
    return database.query(
      `
      SELECT EXISTS(
        SELECT 
          id 
        from form
        WHERE id = ?
      ) AS RESULT`,
      [formId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getForm = async (formId) => {
  try {
    return await database.query(
      `
      SELECT 
        form_data
      FROM form
      WHERE id = ?`,
      [formId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  getCount,
  getList,
  getForm,
  checkFormId,
  getSearchList,
  getFilterList,
};
