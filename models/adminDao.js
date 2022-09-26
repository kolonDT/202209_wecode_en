const { database } = require("./database");

const checkAdminId = async (adminId) => {
  return database.query(
    `
    SELECT EXISTS(
      SELECT 
        admin_id 
      from admin 
      WHERE admin_id  = ?
    ) AS RESULT`,
    [adminId]
  );
};

const checkPassword = async (adminPassword) => {
  return database.query(
    `
    SELECT EXISTS(
      SELECT 
        password
      from admin 
      WHERE password = ?
    ) AS RESULT`,
    [adminPassword]
  );
};

const getPkId = async (adminId) => {
  return database.query(
    `
    SELECT 
      id
    FROM admin
    WHERE admin_id = ?`,
    [adminId]
  );
};

module.exports = {
  checkAdminId,
  checkPassword,
  getPkId,
};
