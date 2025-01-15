const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const e = require("express");
const fs = require("fs");

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SERCRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return result;
  } catch (error) {
    console.log(error.message);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

module.exports = { uploadCloudinary };
