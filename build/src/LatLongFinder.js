"use strict";
var MetOfficeQuerier_1 = require("./MetOfficeQuerier");
// TODO: Import KDTree
// TODO: Import LinkedList?
var LatLongFinder = (function () {
    function LatLongFinder() {
        this.mq = new MetOfficeQuerier_1.MetOfficeQuerier();
        this.metLocations = this.mq.requestMetLocations();
    }
    LatLongFinder.prototype.searchMetOfficeLocations = function () {
    };
    return LatLongFinder;
}());
exports.LatLongFinder = LatLongFinder;
