const { database } = require("./database");

const error = require("../middlewares/errorConstructor");

const checkSurveyId = async (surveyId) => {
  try {
    return database.query(
      `
      SELECT EXISTS(
        SELECT 
          id 
        from survey 
        WHERE id = ?
      ) AS RESULT`,
      [surveyId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getLink = async (surveyId) => {
  try {
    return await database.query(
      `
      SELECT 
        survey_url AS surveyLink
      FROM survey
      WHERE id = ?`,
      [surveyId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  checkSurveyId,
  getLink,
};
