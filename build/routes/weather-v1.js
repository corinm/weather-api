"use strict";
var express_1 = require("express");
var LatLongFinder_1 = require("../src/LatLongFinder");
var router = express_1.Router();
/* Weather API v1 */
/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function (req, res, next) {
    var llf = new LatLongFinder_1.LatLongFinder();
    llf.search();
    res.send({
        forecast: 'Some JSON here'
    });
});
exports.WeatherRoutesV1 = router;
