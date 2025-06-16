import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import configObj from '../config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configObj[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
      timezone: config.timezone
    }
  );
}

// Đọc tất cả các model trong thư mục này
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    // Dùng dynamic import cho ES Module
    import(path.join(__dirname, file)).then(module => {
      const model = module.default(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
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

export { sequelize };
export { Sequelize };
export default db;