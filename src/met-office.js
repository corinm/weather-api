const Promise = require('promise');
const rp = require('request-promise');
const Location = require('./location').Location;
var GeoTree = require('geo-tree');

class MetOffice {

  constructor() {
    // Met Office locations request - options object
    this._optionsLocationRequest = {
      uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
      qs: {
        key: process.env.MET_KEY
      },
      json: true
    };
    // Blank array of Met Office locations
    this._metLocations = [];
  };

  getWeather(postcode, apiKey) {

    this.getMetOfficeLocations() // A promise
      .then((locations) => {
        console.log(locations[0]);
        return this.createTree(locations);
      })
      // .then(tree => console.log(tree));

  };

  /*
   * Returns Promise of an array of Met Office weather locations
   */
  getMetOfficeLocations() {
    
    console.log("HERE");

    return rp(this._optionsLocationRequest)
      .then((data) => {
        return data.Locations.Location

          // Convert into Location objects
          .map(rawLocation => new Location(rawLocation.id,
                                           rawLocation.name,
                                           rawLocation.unitaryAuthArea,
                                           rawLocation.latitude,
                                           rawLocation.longitude)
          )

          // Convert into GeoTree object where data is Location object
          .map(location => {
            return {
              lat: location.latitude,
              lng: location.longitude,
              data: location
            }
          });
      })
      .catch((error) => {
        console.error(error);
      })

  };

  /*
   * Accepts a list of Location objects, returns a K-Dimensional Tree
   */
  createTree(locations) {
    var geoTree = new GeoTree();
    geoTree.insert(locations);
    console.log(geoTree);
  };

}

module.exports.MetOffice = MetOffice;
