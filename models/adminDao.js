const { database } = require("./database");

const error = require("../middlewares/errorConstructor");

const checkAdminId = async (adminId) => {
  try {
    return await database.query(
      `
      SELECT EXISTS(
        SELECT 
          admin_id 
        from admin 
        WHERE admin_id  = ?
      ) AS RESULT`,
      [adminId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const checkPassword = async (adminPassword) => {
  try {
    return await database.query(
      `
      SELECT EXISTS(
        SELECT 
          password
        from admin 
        WHERE password = ?
      ) AS RESULT`,
      [adminPassword]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

const getPkId = async (adminId) => {
  try {
    return await database.query(
      `
      SELECT 
        id
      FROM admin
      WHERE admin_id = ?`,
      [adminId]
    );
  } catch (err) {
    throw new error("INVALID_DATA_INPUT", 500);
  }
};

module.exports = {
  checkAdminId,
  checkPassword,
  getPkId,
};
