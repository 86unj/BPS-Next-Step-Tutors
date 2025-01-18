const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Role = sequelize.define(
  'role',
  {
    roleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      field: 'role_id',
      primaryKey: true,
    },
    roleName: {
      type: Sequelize.STRING(20),
      field: 'role_name',
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Role;
