const express =  require('express');
const environment = require('./config/environment');
const logger = require('./utils/logger');
const { connectDB } = require('./config/db.js');
const cors = require('cors');
const errorHandling = require('./middlewares/errorHandling.middleware');

const API_v1s = require('./routes/v1/index');

const app = express();

//Handling middlewares
app.use(cors());

app.use(express.json());
app.use(errorHandling);

//Routes
app.use('/api/v1', API_v1s);

//Connect database
connectDB();

app.listen(environment.PORT, () => {
  logger.info(`Server is running on port: ${environment.PORT}`)
});

