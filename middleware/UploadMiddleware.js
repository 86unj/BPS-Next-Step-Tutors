const FileUtils = require('../util/FileUtils');

exports.uploadMiddleware = dest => {
  const upload = FileUtils.upload(dest);
  return upload.single('profileImage');
};
