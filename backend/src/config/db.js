const environment = require('./environment');
const  { Sequelize } = require('sequelize');
const logger = require('../utils/logger.js');

const sequelze = new Sequelize(
  environment.db.DB_NAME,
  environment.db.DB_USER,
  environment.db.DB_PASSWORD,
  {
    host: environment.db.DB_HOST,
    port: environment.db.DB_PORT,
    dialect: 'mysql',
    logging: false, // Disable logging; default: console.log
  }
);

const connectDB = async () => {
  try {
    await sequelze.authenticate();
    logger.info('Database connection has been established successfully.');

    return sequelze;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error.message}`);
  }
}

module.exports = { connectDB, sequelze };