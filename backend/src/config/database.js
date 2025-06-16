// Connect to mysql here
import { Sequelize } from 'sequelize';
import env from './environment.js'; // Import your environment configuration

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: 'mysql',
    logging: false, // Disable logging; default: console.log
  }
)

//Kết nối database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;