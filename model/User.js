const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const User = sequelize.define(
  'user',
  {
    userId: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'user_id',
      primaryKey: true,
    },
    studentId: {
      type: Sequelize.STRING(10),
      allowNull: false,
      field: 'student_id',
      unique: true,
    },
    userName: {
      type: Sequelize.STRING(255),
      field: 'user_name',
      allowNull: false,
    },
    roleId: {
      type: Sequelize.INTEGER,
      field: 'role_id',
      references: {
        model: 'role',
        key: 'role_id',
      },
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    profileImage: {
      type: Sequelize.STRING,
      field: 'profile_image',
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
      defaultValue: Sequelize.DataTypes.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'update_at',
      defaultValue: Sequelize.DataTypes.NOW,
    },
    rating: {
      type: Sequelize.DECIMAL,
      validate: {
        min: 0.0,
        max: 10.0,
      },
    },
    introduction: {
      type: Sequelize.TEXT,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
