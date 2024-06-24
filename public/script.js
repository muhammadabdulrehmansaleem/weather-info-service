document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('weatherForm');
    const weatherInfo = document.getElementById('weatherInfo');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const city = document.getElementById('cityInput').value;
        if (!city) {
            weatherInfo.innerHTML = '<p class="error">Please enter a city name.</p>';
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/weather/${city}`);
            const data = await response.json();

            if (response.ok) {
                displayWeather(data);
            } else {
                weatherInfo.innerHTML = `<p class="error">${data.error}</p>`;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p class="error">An error occurred. Please try again later.</p>';
        }
    });

    function displayWeather(data) {
        const html = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} K</p>
            <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
        weatherInfo.innerHTML = html;
    }
});
