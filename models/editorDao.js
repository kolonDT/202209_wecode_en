const { database } = require("./database");

const error = require("../middlewares/errorConstructor");

const makeForm = async (formData) => {
  try {
    await database.query(
      `
      INSERT INTO form(
        form_data
      ) VALUES (?)`,
      [JSON.stringify(formData)]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT!!!", 500);
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

const getImagesId = async () => {
  return database.query(`SELECT MAX(id) as id
        FROM images`);
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
    const imagesId = await getImagesId();

    await database.query(
      `
      UPDATE images
      SET form_id = ?
      WHERE images.id = ?
      `,
      [formId, imagesId[0].id]
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

const setImage = async (absPath) => {
  await database.query(
    `
    INSERT INTO images (
      img
    ) VALUES (
      ?
    )
    `,
    [absPath]
  );
};

const getImage = async (surveyId) => {
  try {
    const formId = await database.query(
      `
    SELECT form_id
    FROM survey 
    WHERE survey.id = ?
    `,
      [surveyId]
    );
    return await database.query(
      `
      SELECT img 
      FROM images 
      WHERE images.form_id =?
      `,
      [formId[0].form_id]
    );
  } catch (err) {
    throw new error("failed", 404);
  }
};

const findGarbageImage = async () => {
  return database.query(
    `
    SELECT img 
    FROM images 
    WHERE form_id IS NULL
    `
  );
};

const deleteGarbageImageRow = async () => {
  database.query(
    `
    DELETE FROM images 
    WHERE form_id IS NULL;
    `
  );
};

const deleteSurvey = async (surveyId) => {
  await database.query(`
    SET foreign_key_checks = 0;
  `);
  await database.query(
    `
  DELETE FROM survey 
  WHERE id = ?;
  `,
    [surveyId]
  );
  await database.query(
    `
    SET foreign_key_checks = 1;
    `
  );
};

module.exports = {
  makeForm,
  getFormId,
  makeSurvey,
  getSurveyId,
  SetSurveyLink,
  setImage,
  getImage,
  findGarbageImage,
  deleteGarbageImageRow,
  deleteSurvey,
};
