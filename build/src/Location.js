"use strict";
var Location = (function () {
    function Location(id, name, region, latitude, longitude) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Location;
}());
exports.Location = Location;
