const weatherService = require('../../services/weatherService');
const axios = require('axios');

jest.mock('axios');

describe('Weather Service', () => {
    it('should fetch weather data for a given city', async () => {
        const city = 'London';
        const mockWeatherData = {
            data: {
                coord: { lon: -0.1257, lat: 51.5085 },
                weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
                main: { temp: 297.05, feels_like: 297.09, temp_min: 294.87, temp_max: 299.21, pressure: 1019, humidity: 61 },
                name: 'London',
                cod: 200,
            },
        };

        axios.get.mockResolvedValue(mockWeatherData);

        const weatherData = await weatherService.getWeather(city);
        expect(weatherData).toEqual(mockWeatherData.data);
        expect(axios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=741372be45891c7f9614f497f8d0e194`);
    });
});
