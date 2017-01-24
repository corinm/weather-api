"use strict";
var MetOfficeQuerier_1 = require("./MetOfficeQuerier");
var kdt = require("kdt");
// TODO: Import KDTree
// TODO: Import LinkedList?
var LatLongFinder = (function () {
    function LatLongFinder() {
        this.tree = null;
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
                    long: location.longitude
                };
            });
            console.log("Creating tree");
            return kdt.createKdTree(coords, distance, ['lat', 'long']);
        };
        this.searchMetOfficeLocations = function () {
            console.log("Calling searchMetOfficeLocations()");
        };
        this.metQuerier = new MetOfficeQuerier_1.MetOfficeQuerier();
        this.metLocations = this.metQuerier.requestMetLocations(this.createTree);
    }
    return LatLongFinder;
}());
exports.LatLongFinder = LatLongFinder;
