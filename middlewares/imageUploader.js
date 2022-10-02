const multer = require("multer");
const fs = require("fs");
const path = require("path");

try {
  fs.readdirSync("uploads");
} catch {
  console.error("폴더가 없습니다. 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      where = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, where);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = {
  upload,
};
