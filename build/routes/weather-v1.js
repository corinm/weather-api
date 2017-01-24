"use strict";
var express_1 = require("express");
var Weather_1 = require("../src/Weather");
var router = express_1.Router();
/* Weather API v1 */
/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {
    var metOfficeApiKey = process.env.MET_KEY;
    var weather = new Weather_1.Weather();
    weather.getWeather('L1 6ER', metOfficeApiKey);
    res.send({
        forecast: 'Some JSON here'
    });
});
exports.WeatherRoutesV1 = router;
