const { database } = require("./database");

const getList = async (startPageNo, limit) => {
  return database.query(
    `
    SELECT 
      survey.id,
      name,
      status,
      DATE_FORMAT(start_date, '%Y-%c-%e') AS start_date,
      DATE_FORMAT(end_date, '%Y-%c-%e') AS end_date,
      COUNT(opinion.id) AS count,
      (SELECT COUNT(id) FROM survey) AS surveycount
    FROM survey
    INNER JOIN survey_status 
    ON survey_status_id = survey_status.id
    LEFT JOIN opinion 
    ON survey.id = opinion.survey_id
    GROUP BY survey.id
    ORDER BY survey_status_id
    LIMIT ?, ?
    `,
    [startPageNo, limit]
  );
};

module.exports = {
  getList,
};
