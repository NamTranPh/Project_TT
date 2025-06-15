'use strict';

import env from '../config.js'; // Import file config.js của bạn

export default {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: 'mysql', // Giả sử bạn dùng MySQL, thay đổi nếu cần
    timezone: '+07:00' // Múi giờ Việt Nam
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: `${env.DB_NAME}_test`, // Database riêng cho môi trường test
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: 'mysql',
    timezone: '+07:00'
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: `${env.DB_NAME}_prod`, // Database riêng cho môi trường production
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: 'mysql',
    timezone: '+07:00'
  }
};