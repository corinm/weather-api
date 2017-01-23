var express = require('express');
var router = express.Router();

/**
 * Requires a UK Postcode, responds with 2-day weather forecast in JSON format
 */
router.get('/:postcode', function(req, res, next) {
  res.send({
      forecast: 'Some JSON here'
  });
});

module.exports = router;
