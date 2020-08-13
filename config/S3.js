// Load the SDK and UUID
// process.env.AWS_SDK_LOAD_CONFIG = true;
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const keys = require("./keys");

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  region: keys.region,
});

var uploadPost = multer({
  limits: {
    fileSize: 52428800,
  },
  storage: multerS3({
    s3,
    bucket: keys.s3Bucket,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, {fieldName: file.fieldname});
    },
    key: (req, file, cb) => {
      const [name, ext] = file.originalname.split(".");
      cb(null, `${name}-${Date.now().toString()}.${ext}`);
    },
  }),
});

module.exports = uploadPost;
