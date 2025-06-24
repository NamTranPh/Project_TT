const environment = require('../config/environment.js')
const winston = require('winston');
const { format } = winston;


// Custom format cho JSON log (không màu cho file)
const fileFormat = format.printf(({ level, message, timestamp, ...metadata }) => {
  return JSON.stringify({
    timestamp,
    level,
    message,
    correlationId: metadata.correlationId || 'none',
    ...metadata
  });
});

// Custom format cho console với màu
const consoleFormat = format.printf(({ level, message, timestamp}) => {
  return `${timestamp} [${level}]: ${message}`;
});

const env = environment.NODE_ENV || 'development';
const logLevel = env === 'production' ? 'info' : 'debug';


//Create Winston Logger
const logger = winston.createLogger({
  level: logLevel,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    consoleFormat
  ),
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), consoleFormat),
      level: env === 'production' ? 'info' : 'debug',
    }),

    new winston.transports.File({
      filename: './src/logs/app.log',
      maxsize: 20 * 1024 * 1024,
      maxFiles: 30,
      tailable: true,
      format: format.combine(fileFormat)
    }),

    new winston.transports.File({
      filename: './src/logs/error.log',
      level: 'error',
      format: format.combine(fileFormat)
    })
  ]
});

module.exports = logger;