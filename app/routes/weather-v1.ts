import { Router, Request, Response } from 'express';
import { LatLongFinder } from '../src/LatLongFinder';

import * as Rx from 'rxjs/Rx';

var router: Router = Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function(req, res, next) {

  let llf: LatLongFinder = new LatLongFinder();
  llf.searchMetOfficeLocations();

  res.send({
      forecast: 'Some JSON here'
  });
});

export const WeatherRoutesV1: Router = router;
