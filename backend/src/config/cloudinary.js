const cloudinary = require('cloudinary').v2;
const environment = require('./environment');

  //configure cloudinary
  cloudinary.config({
    cloud_name: environment.cloudinary.CLOUDINARY_NAME,
    api_key: environment.cloudinary.CLOUDINARY_API_KEY,
    api_secure: environment.cloudinary.CLOUDINARY_SECRET,
    secure: true
  });

  module.exports = cloudinary;