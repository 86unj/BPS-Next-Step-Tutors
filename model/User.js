const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    student_id: {
      type: Sequelize.STRING(10),
      allowNull: false,
      unique: true,
    },
    user_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    role_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'role',
        key: 'role_id',
      },
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    profile_image: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.DataTypes.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.DataTypes.NOW,
    },
    rating: {
      type: Sequelize.DECIMAL,
      validate: {
        min: 0.0,
        max: 10.0,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
