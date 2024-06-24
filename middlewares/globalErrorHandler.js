const logger = require('../config/logger');

const globalErrorHandler = (err, req, res, next) => {
    logger.error(err.message, err);

    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
};

module.exports = globalErrorHandler;
