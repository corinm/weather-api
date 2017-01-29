var express = require("express");
var WeatherAPI = require('../src/weather-api').WeatherAPI;

var router = express.Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/weather', function (req, res, next) {

  let postcode = req.query.postcode;

  const wa = new WeatherAPI();
  wa.getWeather(postcode, (result) => {
    res.send({
      forecast: result
    });
  });

  // res.send({
  //   forecast: "Some JSON"
  // });

});

module.exports = router;
