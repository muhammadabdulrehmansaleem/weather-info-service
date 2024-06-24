const express = require('express');
const router = express.Router();
const { validateWeatherRequest } = require('../middlewares/validation');
const { getWeather } = require('../controllers/weatherController');

router.get('/error', (req, res, next) => {
    const error = new Error('This is a test error');
    error.status = 400;
    next(error);
});

router.get('/:city', validateWeatherRequest, getWeather);

module.exports = router;
