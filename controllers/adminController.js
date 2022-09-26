const adminService = require("../services/adminService");
const error = require("../middlewares/errorConstructor");

const login = async (req, res) => {
  const adminId = req.body.id;
  const adminPassword = req.body.password;
  if (!adminId || !adminPassword) {
    throw new error("ADMIN KEY ERROR", 400);
  }
  const adminToken = await adminService.login(adminId, adminPassword);
  res.status(200).json({ adminToken });
};

module.exports = {
  login,
};
