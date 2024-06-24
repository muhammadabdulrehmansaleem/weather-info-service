// app.js

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const weatherRoutes = require('./routes/weather');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const swaggerMiddleware = require('./middlewares/swaggerMiddleware');
const path = require('path');
const logger = require('./config/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/weather', weatherRoutes);

swaggerMiddleware(app);

app.use(globalErrorHandler);

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
