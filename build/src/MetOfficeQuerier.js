"use strict";
var https_1 = require("https");
var MetOfficeQuerier = (function () {
    // private urlMetWeather1: string = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/";
    // private urlMetWeather2: string = "?res=3hourly&key=";
    function MetOfficeQuerier() {
        var _this = this;
        this.metHost = 'datapoint.metoffice.gov.uk';
        this.requestMetLocations = function () {
            var options = {
                host: 'datapoint.metoffice.gov.uk',
                path: _this.pathMetLocations,
                method: 'GET'
            };
            https_1.get(options, function (response) {
                var body = '';
                response.on('data', function (d) {
                    body += d;
                });
                response.on('end', function () {
                    // Data reception is done, do whatever with it!
                    var parsed = JSON.parse(body);
                    console.log(body);
                    return '';
                });
            });
        };
        var metKey = process.env.MET_KEY;
        this.pathMetLocations = "/public/data/val/wxfcs/all/json/sitelist?key=" + metKey;
    }
    return MetOfficeQuerier;
}());
exports.MetOfficeQuerier = MetOfficeQuerier;
