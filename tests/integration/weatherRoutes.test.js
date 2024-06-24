const request = require('supertest');
const app = require('../../app');

describe('GET /api/weather/:city', () => {
    it('should return weather data for a valid city', async () => {
        const response = await request(app).get('/api/weather/London');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('London');
    });

    it('should return 500 for an invalid city', async () => {
        const response = await request(app).get('/api/weather/InvalidCity');
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error');
    });
});