import cloudinary from 'cloudinary'
import fs from 'fs'

let add = () =>{
  cloudinary.v2.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
}

export const cloudinaryUploadImg = async (path, folder) =>{
  add()
  const result = await cloudinary.v2.uploader.upload(path, {folder: folder})
  return result
}

export const cloudinaryDeleteImg = async (publicId) =>{
  add()
  await cloudinary.v2.uploader.destroy(publicId)
}

export const productImageUpload = async (file, folder) =>{
    const result = await cloudinaryUploadImg(file.path, folder)
    let urls = { url: result.secure_url, publicId: result.public_id}
    fs.unlink(file.path, (err)=>{
          if(err) next(err);
    });
    return urls;
  }

