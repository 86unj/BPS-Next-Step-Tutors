const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utils = require('../util/Utils');
const User = require('../model/User');
const dotenv = require('dotenv');

dotenv.config();

exports.createUser = async (userId, studentId, password, passwordConfirm, userName) => {
  if (!userId || !studentId || !password || !passwordConfirm || !userName) {
    return Utils.createError(400, 'SIGNUP001');
  }

  if (!Utils.validateEmail(userId)) {
    return Utils.createError(412, 'SIGNUP004');
  }

  if (!Utils.validatePassword(password)) {
    return Utils.createError(412, 'SIGNUP005');
  }

  if (password !== passwordConfirm) {
    return Utils.createError(412, 'SIGNUP003');
  }

  const user = await User.findOne({ where: { userId: userId } });

  if (user) {
    return Utils.createError(412, 'SIGNUP002');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      userId: userId,
      studentId: studentId,
      password: hashedPassword,
      userName: userName,
    });
    return Utils.createSuccess();
  } catch (e) {
    console.log(e);
    return Utils.createError(500, 'SIGNUP006');
  }
};

exports.loginUser = async (userId, password) => {
  if (!userId || !password) {
    return Utils.createError(400, 'LOGIN001');
  }

  const user = await User.findOne({ where: { userId: userId } });
  if (!user) {
    return Utils.createError(412, 'LOGIN002');
  }

  const ret = await bcrypt.compare(password, user.password);
  if (!ret) {
    return Utils.createError(412, 'LOGIN002');
  }

  const key = process.env.JWT_SECRET_KEY;
  let token = jwt.sign(
    {
      type: 'jwt',
      userId: user.userId,
      role: user.roleId,
    },
    key,
    {
      expiresIn: '1h',
    }
  );

  console.log(token);
  return token;
};

exports.updateUserProfile = async (
  userId,
  password,
  passwordConfirm,
  userName,
  introduction,
  profileImagePath
) => {
  if (!userId || !password || !passwordConfirm || !userName) {
    return Utils.createError(400, 'SIGNUP001');
  }

  if (!Utils.validateEmail(userId)) {
    return Utils.createError(412, 'SIGNUP004');
  }

  if (!Utils.validatePassword(password)) {
    return Utils.createError(412, 'SIGNUP005');
  }

  if (password !== passwordConfirm) {
    return Utils.createError(412, 'SIGNUP003');
  }

  const user = await User.findOne({ where: { userId: userId } });

  if (user) {
    return Utils.createError(412, 'SIGNUP002');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await User.update(
    {
      password: hashedPassword,
      userName: userName,
      profileImage: profileImagePath,
      introduction: introduction,
    },
    {
      where: {
        userId: userId,
      },
    }
  );

  return Utils.createSuccess();
};
