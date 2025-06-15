'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env]; // Đọc từ config.js
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    timezone: config.timezone
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Định nghĩa các quan hệ (associations)
db.User.hasMany(db.Order, { foreignKey: 'user_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.Order.belongsTo(db.User, { foreignKey: 'user_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Order.hasMany(db.OrderDetail, { foreignKey: 'order_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.OrderDetail.belongsTo(db.Order, { foreignKey: 'order_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Product.hasMany(db.OrderDetail, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.OrderDetail.belongsTo(db.Product, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Category.hasMany(db.Product, { foreignKey: 'category_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.Product.belongsTo(db.Category, { foreignKey: 'category_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Product.hasMany(db.Image, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.Image.belongsTo(db.Product, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Voucher.hasMany(db.VoucherDetail, { foreignKey: 'voucher_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.VoucherDetail.belongsTo(db.Voucher, { foreignKey: 'voucher_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Product.hasMany(db.VoucherDetail, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.VoucherDetail.belongsTo(db.Product, { foreignKey: 'product_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.Category.hasMany(db.Banner, { foreignKey: 'category_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
db.Banner.belongsTo(db.Category, { foreignKey: 'category_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;