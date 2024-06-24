const weatherService = require('../services/weatherService');
const logger = require('../config/logger');

const getWeather = async (req, res, next) => {
    try {
        const weatherData = await weatherService.getWeather(req.params.city);
        res.json(weatherData);
    } catch (error) {
        logger.error(error.message, error);
        next(error);
    }
};

module.exports = {
    getWeather,
};
