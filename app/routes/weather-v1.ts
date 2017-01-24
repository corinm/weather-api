import { Router, Request, Response } from 'express';
import { Weather } from '../src/Weather';

import * as Rx from 'rxjs/Rx';

var router: Router = Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function(req, res, next) {

  let metOfficeApiKey = process.env.MET_KEY;
  let weather: Weather = new Weather();

  weather.getWeather('L1 6ER', metOfficeApiKey);

  res.send({
      forecast: 'Some JSON here'
  });
});

export const WeatherRoutesV1: Router = router;
