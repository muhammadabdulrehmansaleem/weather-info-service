const { check, validationResult } = require('express-validator');

const validateWeatherRequest = [
    // Ensure the city parameter is a non-empty string containing only alphabetic characters, spaces, hyphens, and apostrophes.
    check('city')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('City is required')
        .matches(/^[a-zA-Z\s'-]+$/)
        .withMessage('City name must contain only alphabetic characters, spaces, hyphens, and apostrophes'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = {
    validateWeatherRequest,
};
