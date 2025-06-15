'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    ship_address: DataTypes.TEXT,
    status: DataTypes.ENUM,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};