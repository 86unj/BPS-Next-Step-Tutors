const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Course = sequelize.define(
  'course',
  {
    course_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    course_name: {
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
