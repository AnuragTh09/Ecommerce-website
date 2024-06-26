import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const id = uuid();
    const extName = file.originalname.split('.').pop();
    const fileName = `${id}.${extName}`;
    cb(null, fileName);
  },
}); 

const upload = multer({ storage });

export const singleImageUpload = upload.fields([
  {
    name: "image",
    maxCount: 1,
  },
]);
