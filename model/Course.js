const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Course = sequelize.define(
  'course',
  {
    courseId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      field: 'course_id',
      primaryKey: true,
    },
    course_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'course_name',
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Course;
