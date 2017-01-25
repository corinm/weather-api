var express = require("express");
var WeatherAPI = require('../src/weather-api').WeatherAPI;

var router = express.Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {

    let postcode = 'L2 3PS';

    const wa = new WeatherAPI();
    wa.getWeather(postcode);

    res.send({
        forecast: 'Some JSON here'
    });
});

module.exports = router;
