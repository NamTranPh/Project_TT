'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voucher.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    destroy: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};