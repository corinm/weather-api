"use strict";
var request = require("request");
var MetOfficeQuerier = (function () {
    // private urlMetWeather1: string = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/";
    // private urlMetWeather2: string = "?res=3hourly&key=";
    function MetOfficeQuerier() {
        var _this = this;
        this.requestMetLocations = function () {
            var options = {
                uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
                qs: {
                    key: _this.metKey
                },
                json: true
            };
            request.get(options, function (error, response, body) {
                if (error) {
                    console.error(error);
                }
                else if (response.statusCode == 200) {
                    console.log(body.Locations.Location.length + " locations retrieved");
                    return body.Locations.Location;
                }
            });
        };
        this.metKey = process.env.MET_KEY;
    }
    return MetOfficeQuerier;
}());
exports.MetOfficeQuerier = MetOfficeQuerier;
