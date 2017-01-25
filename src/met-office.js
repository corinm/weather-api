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

    this._optionsLatLongFromPostcode = {
      uri: 'https://api.postcodes.io/postcodes',
      qs: {
        q: ''
      },
      json: true
    }

    // Blank array of Met Office locations
    this._metLocations = [];
  };

  getWeather(postcode, apiKey) {

    this.getMetOfficeLocations() // A promise
      .then((locations) => this.createTree(locations))
      .then((tree) => {
        // Get nearest location from tree
        this.getMyLatLong(postcode) // A promise
          .then((userLatLong) => {

            // TODO: Search using KDTree

            let a = tree.find(userLatLong);
            console.log(a);
          })
          .then(
           // Get weather forecast for nearest location

          )
          .then(
            // Format weather forecast
          )
          .then(
            // Return it via res as JSON
          )
      })
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
              lat: parseInt(location.latitude),
              lng: parseInt(location.longitude),
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
    return geoTree;
  };

  /*
   * Accepts a postcode, returns lat and long as an object
   */
  getMyLatLong(postcode) {
    let options = this._optionsLatLongFromPostcode;
    options.qs.q = postcode;
    return rp(options)
      .then((response) => {
        return response.result[0];
      })
      .then((location) => {
        let a = {
          lat: parseInt(location.latitude),
          lng: parseInt(location.longitude)
        }
        // console.log(a);
        return a;
      });
  };

}

module.exports.MetOffice = MetOffice;
