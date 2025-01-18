const userService = require('../service/UserService');

exports.getSignup = (req, res, next) => {
  res.render('signup');
};

exports.createUser = async (req, res, next) => {
  const { userId, studentId, password, passwordConfirm, userName } = req.body;

  const result = await userService.createUser(
    userId,
    studentId,
    password,
    passwordConfirm,
    userName
  );
  console.log(result);

  if (result.status === 200) {
    return res.redirect(303, 'login');
  } else {
    return res.status(result.status).json(result);
  }
};

exports.getLogin = (req, res, next) => {
  res.render('login');
};

exports.loginUser = async (req, res, next) => {
  const { userId, password } = req.body;

  const token = await userService.loginUser(userId, password);
  res.cookie('token', token);

  return res.redirect(303, '/');
};

exports.logoutUser = (req, res, next) => {
  res.clearCookie('token');
  return res.redirect(303, '/');
};

exports.updateUserProfile = async (req, res, next) => {
  const { userId, password, passwordConfirm, userName, introduction } = req.body;
  const profileImagePath = req.file.path.split('public')[1];

  const result = await userService.updateUserProfile(
    userId,
    password,
    passwordConfirm,
    userName,
    introduction,
    profileImagePath
  );

  if (result.status === 200) {
    return res.redirect(303, '/');
  } else {
    return res.status(result.status).json(result);
  }
};
