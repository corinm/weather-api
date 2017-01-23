"use strict";
var MetOfficeQuerier_1 = require("./MetOfficeQuerier");
// TODO: Import KDTree
// TODO: Import LinkedList?
var LatLongFinder = (function () {
    function LatLongFinder() {
        var _this = this;
        this.search = function () {
            _this.mq.requestMetLocations();
        };
    }
    LatLongFinder.prototype.LatLongSearcher = function () {
        this.mq = new MetOfficeQuerier_1.MetOfficeQuerier();
    };
    return LatLongFinder;
}());
exports.LatLongFinder = LatLongFinder;
