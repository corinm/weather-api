"use strict";
var request = require("request");
var Location_1 = require("./Location");
var MetOfficeQuerier = (function () {
    function MetOfficeQuerier() {
        var _this = this;
        this.metOfficeLocations = [];
        /**
         * Return an Observable of all Met Office weather station locations from Met Office API
         */
        this.requestMetLocations = function (callback) {
            var options = {
                uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
                qs: {
                    key: _this.metKey
                },
                json: true
            };
            return request.get(options, function (error, response, body) {
                if (error || response.statusCode != 200) {
                    console.error(error || "Error in MetOfficeQuerier.requestMetLocations()");
                    return [];
                }
                else {
                    console.log(body.Locations.Location.length + " locations retrieved");
                    var rawLocations = body.Locations.Location;
                    var locations = rawLocations.map(function (location) { return new Location_1.Location(location['id'], location['name'], location['unitaryAuthArea'], location['latitude'], location['longitude']); });
                    callback(locations);
                }
            });
        };
        this.metKey = process.env.MET_KEY;
    }
    return MetOfficeQuerier;
}());
exports.MetOfficeQuerier = MetOfficeQuerier;
;
