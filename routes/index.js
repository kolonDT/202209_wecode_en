const express = require("express");
const router = express.Router();
const adminRouter = require("./adminRouter");
const mainRouter = require("./mainRouter");

router.use("/admin", adminRouter.router);

router.use("/main", mainRouter.router);

module.exports = router;
