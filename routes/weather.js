const express = require('express');
const { validateWeatherRequest } = require('../middlewares/validation');
const { getWeather } = require('../controllers/weatherController');
const router = express.Router();

router.get('/:city', validateWeatherRequest, getWeather);

module.exports = router;
