'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VoucherDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VoucherDetail.init({
    id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    voucher_id: DataTypes.INTEGER,
    started_date: DataTypes.DATE,
    ended_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'VoucherDetail',
  });
  return VoucherDetail;
};