'use strict'
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log('uploading file filename: '+ file.originalname)
    const newDirectory = path.join('uploads', req._uuid);
    fs.mkdir(newDirectory, () => cb(null, newDirectory));
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const uniqueSuffix = new Date().toISOString().replace(/:/g, '-')
    //console.log('filename: '+uniqueSuffix + path.extname(file.originalname))
    cb(null, uniqueSuffix + path.extname(file.originalname))
  },
  
})

const fileFilter = (req, file, cb) => {
  const extensions = ['image/png', 'image/jpg', 'image/jpeg']
  const isValid = extensions.find(item => item == file.mimetype) != undefined
  console.log({...file, isValid})
  if(isValid) cb(null, true) // To accept the file pass `true`
  else {
    cb({ file, 'message': 'Unsupported file format', 'file_formats': extensions })
  }
}

export default multer({ storage, fileFilter })