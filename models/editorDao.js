const { database } = require("./database");

const error = require("../middlewares/errorConstructor");

const makeForm = async (formData) => {
  try {
    await database.query(
      `
      INSERT INTO form(
        form_data
      ) VALUES (?)`,
      [formData]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getFormId = async () => {
  try {
    return await database.query(
      `
      SELECT 
        MAX(id) AS id 
      FROM form`
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
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
  try {
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
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getSurveyId = async () => {
  try {
    return await database.query(
      `
      SELECT 
        MAX(id) AS id 
      FROM survey`
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const SetSurveyLink = async (surveyId, surveyLink) => {
  try {
    await database.query(
      `
      UPDATE 
        survey
      SET survey_url = ? 
      WHERE id = ?`,
      [surveyLink, surveyId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const setImage = async (image) => {
  const formId = await getFormId();
  try {
    await database.query(
      `
    INSERT INTO images (
      img,
      form_id
    )VALUES(
      ?,?
    )
    `,
      [image, formId[0].id]
    );
  } catch (err) {
    throw new error("image set failed", 500);
  }
};

const getImage = async (formId) => {
  try {
    return await database.query(
      `
      SELECT img 
      FROM images 
      WHERE images.form_id =?
      `,
      [formId]
    );
  } catch (err) {
    throw new error("image get failed", 500);
  }
};

module.exports = {
  makeForm,
  getFormId,
  makeSurvey,
  getSurveyId,
  SetSurveyLink,
  setImage,
  getImage,
};
