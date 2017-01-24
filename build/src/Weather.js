"use strict";
var request_1 = require("request");
var Location_1 = require("./Location");
var kdt_1 = require("kdt");
var Weather = (function () {
    function Weather() {
        var _this = this;
        this.getWeather = function (postcode, metKey) {
            var options = {
                uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
                qs: {
                    key: metKey
                },
                json: true
            };
            request_1.get(options, function (error, response, body) {
                if (error || response.statusCode != 200) {
                    console.error(error || "Error");
                    return [];
                }
                else {
                    console.log("1. Retrieved locations");
                    var rawLocations = body.Locations.Location;
                    var locations = rawLocations.map(function (location) { return new Location_1.Location(location['id'], location['name'], location['unitaryAuthArea'], location['latitude'], location['longitude']); });
                    var tree_1 = _this.createTree(locations);
                    console.log("2. Tree created");
                    // Get user's longlat
                    var options_1 = {
                        uri: 'https://api.postcodes.io/postcodes',
                        qs: {
                            q: postcode
                        },
                        json: true
                    };
                    request_1.get(options_1, function (error, response, body) {
                        if (error || response.statusCode != 200) {
                            console.error(error || "Error");
                            return [];
                        }
                        else {
                            var latLong = {
                                lat: body.result[0].latitude,
                                long: body.result[0].longitude
                            };
                            var nearest = tree_1.nearest(latLong, 1);
                        }
                    });
                }
            });
        };
        /**
         * Returns K-Dimensional Tree made from Met Office locations
         */
        this.createTree = function (locations) {
            var latLongs = [];
            var distance = function (a, b) { return Math.pow(a.lat - b.lat, 2) + Math.pow(a.long - b.long, 2); };
            var coords = locations
                .map(function (location) {
                return {
                    lat: location.latitude,
                    long: location.longitude,
                    id: location.id
                };
            });
            return kdt_1.createKdTree(coords, distance, ['lat', 'long', 'id']);
        };
    }
    return Weather;
}());
exports.Weather = Weather;
;
