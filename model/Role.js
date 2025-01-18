const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Role = sequelize.define(
  'role',
  {
    role_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    role_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Role;
