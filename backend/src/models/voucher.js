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
      this.hasMany(models.VoucherDetail, {
        foreignKey: 'voucherId',
        as: 'voucherDetails'
      });
    }
  }
  Voucher.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },
    destroy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Voucher',
    tableName: 'Vouchers',
    timestamps: true
  });
  return Voucher;
};