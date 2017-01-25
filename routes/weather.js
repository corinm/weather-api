var express = require("express");
var WeatherAPI = require('../src/weather-api').WeatherAPI;

var router = express.Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {

    const wa = new WeatherAPI();
    wa.getWeather();

    res.send({
        forecast: 'Some JSON here'
    });
});

module.exports = router;
