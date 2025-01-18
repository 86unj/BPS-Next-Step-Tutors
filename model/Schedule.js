const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Schedule = sequelize.define(
  'schedule',
  {
    schedule_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    course_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'course',
        key: 'course_id',
      },
    },
    tutor_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    tutee_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    start_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Schedule;
