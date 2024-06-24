const weatherController = require('../../controllers/weatherController');
const weatherService = require('../../services/weatherService');

jest.mock('../../services/weatherService');

describe('Weather Controller', () => {
    it('should return weather data for a valid city', async () => {
        const req = { params: { city: 'London' } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        const mockWeatherData = {
            coord: { lon: -0.1257, lat: 51.5085 },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
            main: { temp: 297.05, feels_like: 297.09, temp_min: 294.87, temp_max: 299.21, pressure: 1019, humidity: 61 },
            name: 'London',
            cod: 200,
        };

        weatherService.getWeather.mockResolvedValue(mockWeatherData);

        await weatherController.getWeather(req, res);
        expect(res.json).toHaveBeenCalledWith(mockWeatherData);
        expect(res.status).not.toHaveBeenCalled();
    });

    it('should handle errors', async () => {
        const req = { params: { city: 'InvalidCity' } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        const mockError = new Error('City not found');

        weatherService.getWeather.mockRejectedValue(mockError);

        await weatherController.getWeather(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'City not found' });
    });
});
