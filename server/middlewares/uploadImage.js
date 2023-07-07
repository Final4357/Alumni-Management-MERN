import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname)
  }
})

function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb({ message: 'Unsupport file formate.' }, false);
  }
}

export const uploadPhoto = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fieldSize: 1024 * 1024 }
})