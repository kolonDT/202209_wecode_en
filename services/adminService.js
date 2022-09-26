const adminDao = require("../models/adminDao");
const error = require("../middlewares/errorConstructor");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

const login = async (adminId, adminPassword) => {
  const checkAdminId = await adminDao.checkAdminId(adminId);
  const checkPassword = await adminDao.checkPassword(adminPassword);
  if (checkAdminId[0].RESULT === "0" || checkPassword[0].RESULT === "0") {
    throw new error("ID OR PASSWORD INVALID", 400);
  }
  const getPkId = await adminDao.getPkId(adminId);
  const payLoad = { id: getPkId[0].id, adminId };
  const token = jwt.sign(payLoad, secretKey);
  return token;
};

module.exports = {
  login,
};
