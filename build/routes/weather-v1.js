"use strict";
var express_1 = require("express");
var router = express_1.Router();
/* Weather API v1 */
/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {
    res.send({
        forecast: 'Some JSON here'
    });
});
exports.WeatherRoutesV1 = router;
