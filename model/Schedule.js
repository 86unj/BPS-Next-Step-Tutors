const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Schedule = sequelize.define(
  'schedule',
  {
    scheduleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      field: 'schedule_id',
      primaryKey: true,
    },
    courseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'course',
        key: 'course_id',
      },
    },
    tutorId: {
      type: Sequelize.INTEGER,
      field: 'tutor_id',
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    tuteeId: {
      type: Sequelize.INTEGER,
      field: 'tutee_id',
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
    startTime: {
      type: Sequelize.DATE,
      field: 'start_time',
      allowNull: false,
    },
    endTime: {
      type: Sequelize.DATE,
      field: 'end_time',
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Schedule;
