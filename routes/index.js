const express = require("express");
const router = express.Router();
const adminRouter = require("./adminRouter");
const mainRouter = require("./mainRouter");
const editorRouter = require("./editorRouter");
const linkRouter = require("./linkRouter");
const opinionRouter = require("./opinionRouter");

router.use("/admin", adminRouter.router);

router.use("/main", mainRouter.router);

router.use("/editor", editorRouter.router);

router.use("/link", linkRouter.router);

router.use("/opinion", opinionRouter.router);

module.exports = router;
