'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Products, {
        foreignKey: 'productId',
        as: 'product'
      });
    }
  }
  Image.init({
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
    url: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Image',
    tableName: 'Images',
    timestamps: true
  });
  return Image;
};