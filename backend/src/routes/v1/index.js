const express = require('express');
const logger = require('../../utils/logger');
const ErrorApi = require('~/utils/errorApiCustom');

const Router = express.Router();

Router.get('/status', (req, res) => {
  try {
   logger.info('Test API successfullfy');
   res.status(200).json({
    code: 200,
    message: 'Test API successfullfy'
   });
  } catch (error) {
    logger.error('Test API failure');
    throw new ErrorApi('Test API failure', 400)
  }
});

const API_v1s = Router;

module.exports = API_v1s;