const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const weatherRoutes = require('./routes/weather');
const errorHandler = require('./middlewares/errorHandler');
const swaggerMiddleware = require('./middlewares/swaggerMiddleware');
const path = require('path'); // Import path module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your API routes
app.use('/api/weather', weatherRoutes);

// Swagger setup (if needed, but not necessary for serving static files)
swaggerMiddleware(app);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
