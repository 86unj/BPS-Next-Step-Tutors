const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Availability = sequelize.define(
  'availability',
  {
    availabilityId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      field: 'availability_id',
      primaryKey: true,
    },
    userId: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    dayOfWeek: {
      type: Sequelize.STRING(3),
      allowNull: false,
      field: 'day_of_week',
    },
    startTime: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'start_time',
    },
    endTime: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'end_time',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Availability;
