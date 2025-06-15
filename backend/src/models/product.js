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
      // define association here
    }
  }
  Product.init({
    id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    version: DataTypes.STRING,
    color: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    discout_price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    specifications: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    destroy: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};