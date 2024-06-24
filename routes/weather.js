const express = require('express');
const router = express.Router();
const { validateWeatherRequest } = require('../middlewares/validation');
const { getWeather } = require('../controllers/weatherController');

// Define route for /api/weather/:city
router.get('/:city', validateWeatherRequest, getWeather);

module.exports = router;
