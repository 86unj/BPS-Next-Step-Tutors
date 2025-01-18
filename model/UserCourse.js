const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const UserCourse = sequelize.define(
  'usercourse',
  {
    userId: {
      type: Sequelize.STRING(255),
      field: 'user_id',
      references: {
        model: 'user',
        key: 'user_id',
      },
      primaryKey: true,
    },
    courseId: {
      type: Sequelize.INTEGER,
      field: 'course_id',
      references: {
        model: 'course',
        key: 'course_id',
      },
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = UserCourse;
