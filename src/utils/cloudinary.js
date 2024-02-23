import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from './constants.js';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw Error('Local File Path not found');

    const response = await cloudinary.v2.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    console.log('File uploaded to cloudinary successfully: ', response.url);

    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath); //remove locally saved temp file
  }
};

export { uploadOnCloudinary };
