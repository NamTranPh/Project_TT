'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category'
      });

      this.hasMany(models.Image, {
        foreignKey: 'productId',
        as: 'images'
      });

      this.hasMany(models.OrderDetail, {
        foreignKey: 'productId',
        as: 'orderDetails'
      });

      this.hasMany(models.VoucherDetail, {
        foreignKey: 'productId',
        as: 'voucherDetails'
      });
    }
  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    version: {
      allowNull: false,
      type: DataTypes.STRING
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    specifications: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    destroy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
    timestamps: true
  });
  return Product;
};