const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
    try {
        const weatherData = await weatherService.getWeather(req.params.city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getWeather,
};
