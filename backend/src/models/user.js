'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Token, {
        foreignKey: 'userId',
        as: 'tokens'
      });

      this.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders'
      });
    }
  }
  User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING
      },
      avatar: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM('user', 'admin', 'employee'),
        defaultValue: 'user'
      }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true,
  });
  return User;
};