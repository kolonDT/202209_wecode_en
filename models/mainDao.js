const { database } = require("./database");

const getCount = async (adminPkId) => {
  return await database.query(
    `
    SELECT 
      COUNT(id) AS surveycount
    FROM survey
    WHERE survey.admin_id = ?`,
    [adminPkId]
  );
};

const getList = async (startPageNo, limit, adminPkId) => {
  return await database.query(
    `
    SELECT 
      survey.id,
      name,
      status,
      DATE_FORMAT(start_date, '%Y-%c-%e') AS start_date,
      DATE_FORMAT(end_date, '%Y-%c-%e') AS end_date,
      COUNT(opinion.id) AS count
    FROM survey
    INNER JOIN survey_status 
    ON survey_status_id = survey_status.id
    LEFT JOIN opinion 
    ON survey.id = opinion.survey_id
    WHERE survey.admin_id = ?
    GROUP BY survey.id
    ORDER BY survey_status_id
    LIMIT ?, ?`,
    [adminPkId, startPageNo, limit]
  );
};

module.exports = {
  getCount,
  getList,
};
