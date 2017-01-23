import { Router, Request, Response } from 'express';

var router: Router = Router();

/* Weather API v1 */

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function(req, res, next) {
  res.send({
      forecast: 'Some JSON here'
  });
});

export const WeatherRoutesV1: Router = router;
