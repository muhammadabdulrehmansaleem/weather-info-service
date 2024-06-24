# Weather Information Service

This project is a Weather Information Service API built using Node.js, Express, and integrated with the OpenWeatherMap API. It also includes a frontend for querying weather information and displaying the results. Additionally, it utilizes Swagger for API documentation and CI setup for automated testing.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Continuous Integration](#continuous-integration)
- [Error Handling](#error-handling)
- [API Documentation](#api-documentation)
- [Frontend](#frontend)

## Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/muhammadabdulrehmansaleem/weather-info-service.git
    cd weather-info-service
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```sh
    PORT=3000
    OPEN_WEATHER_MAP_API_KEY=your_openweathermap_api_key
    ```

2. Ensure you replace `your_openweathermap_api_key` with your actual API key from OpenWeatherMap.

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`. You should see a "Hello World!" message.

3. To test the API, navigate to `http://localhost:3000/api/weather/London` (replace "London" with any city name).

## Running Tests

### Unit Tests

1. Run the unit tests:
    ```sh
    npm test
    ```

2. Ensure you have Jest installed and properly configured.

### Integration Tests

1. Integration tests are located in the `tests` directory.
2. Run the integration tests:
    ```sh
    npm run test:integration
    ```

## Project Structure

- `app.js`: Main application entry point.
- `config/`: Configuration files (e.g., `swagger.yaml` for API documentation).
- `controllers/`: Controllers to handle API requests.
- `middlewares/`: Middleware functions (e.g., validation, error handling).
- `routes/`: API route definitions.
- `services/`: Service layer for external API calls (e.g., OpenWeatherMap).
- `tests/`: Unit and integration tests.
- `public/`: Static frontend files.
- `logs/`: Log files for error and combined logs.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI pipeline is configured to run tests on each push to the repository.

1. The CI configuration file is located at `.github/workflows/ci.yml`.
2. Ensure your repository is linked to GitHub Actions.
3. On each push, the CI pipeline will:
    - Install dependencies.
    - Run unit and integration tests.
    - Report test results.

## Error Handling

1. Global error handling is implemented using a middleware in `middlewares/errorHandler.js`.
2. Errors are logged using Winston and stored in `logs/error.log` and `logs/combined.log`.

## API Documentation

1. API documentation is provided using Swagger.
2. Navigate to `http://localhost:3000/api-docs` to view the Swagger UI.

## Frontend

1. A simple frontend is provided to search for weather information.
2. The frontend files are located in the `public` directory.
3. To view the frontend, start the server and navigate to `http://localhost:3000` in your browser.

## Example .env File

```sh
PORT=3000
OPEN_WEATHER_MAP_API_KEY=your_openweathermap_api_key
