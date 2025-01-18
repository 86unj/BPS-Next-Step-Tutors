const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const UserBadge = sequelize.define(
  'userbadge',
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
    badgeId: {
      type: Sequelize.INTEGER,
      field: 'badge_id',
      references: {
        model: 'badge',
        key: 'badge_id',
      },
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = UserBadge;
