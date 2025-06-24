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
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      });

      this.belongsTo(models.Voucher, {
        foreignKey: 'voucherId',
        as: 'voucher'
      });
    }
  }
  VoucherDetail.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    voucherId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startedAt: {
      type: DataTypes.DATE
    },
    endedAt: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'VoucherDetail',
    tableName: 'VoucherDetails',
    timestamps: true
  });
  return VoucherDetail;
};