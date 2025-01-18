const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const UserBadge = sequelize.define(
  'userbadge',
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
    badge_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'badge',
        key: 'badge_id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = UserBadge;
