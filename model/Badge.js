const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Badge = sequelize.define(
  'badge',
  {
    badgeId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      fieldName: 'badge_id',
      primaryKey: true,
    },
    badgeName: {
      type: Sequelize.STRING(255),
      allowNull: false,
      fieldName: 'badge_name',
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    tier: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Badge;
