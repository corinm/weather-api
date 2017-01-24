var express = require("express");
var Weather = require("../src/Weather");

var router = express.Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {
    let metOfficeApiKey = process.env.MET_KEY;
    let weather = new Weather_1.Weather();

    weather.getWeather('L1 6ER', metOfficeApiKey);

    res.send({
        forecast: 'Some JSON here'
    });
});

exports.WeatherRoutesV1 = router;
