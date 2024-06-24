const axios = require('axios');
const config = require('../config/config');

const getWeather = async (city) => {
    const apiKey = config.openWeatherMapApiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(url);
    return response.data;
};

module.exports = {
    getWeather,
};
