const express = require('express');
const router = require('./routes/index');
const { errorHandler } = require('./ErrorHandler');

const app = express();

app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

module.exports = app;