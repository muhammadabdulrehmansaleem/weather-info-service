const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
const errorHandler = require('./middlewares/errorHandler');
const swaggerConfig = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api/weather', weatherRoutes);

swaggerConfig(app);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
