const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const UserCourse = sequelize.define(
  'usercourse',
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    course_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'course',
        key: 'course_id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = UserCourse;
