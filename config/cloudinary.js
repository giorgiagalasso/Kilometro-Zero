const cloudinary = require("cloudinary").v2;
//request of type form-data that allows to send files on requests
const multer = require("multer");
//connect multer w cloudinary
const {CloudinaryStorage} = require("multer-storage-cloudinary");
//connects the cloudinary library to our subscription
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
//storage config on cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "books",
        allowed_formats: ["png", "jpg"], //can add all formats u want ala u have allowed_formats
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const uploadCloud = multer({ storage });
module.exports = uploadCloud;