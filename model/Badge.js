const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Badge = sequelize.define(
  'badge',
  {
    badge_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    badge_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
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
