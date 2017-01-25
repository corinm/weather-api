const Promise = require('promise');
const rp = require('request-promise');
const Location = require('./location').Location;

class MetOffice {

  constructor() {
    this.optionsLocationRequest = {
      uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
      qs: {
        key: process.env.MET_KEY
      },
      json: true
    };
  };

  getWeather(postcode, apiKey) {

    const metLocations = this.getMetOfficeLocations()
      .done(
        (onFulfilled) => {
          console.log("Success");
          this.createTree();
        },
        (onRejected) => {
          console.log("Failed");
        }
      );

  };

  /*
   * Returns Promise of an array of Met Office weather locations
   */
  getMetOfficeLocations() {
    
    console.log("HERE");

    return rp(this.optionsLocationRequest)

      // Convert raw Met Office locations into Location objects
      .then((data) => {
        let locations = data.Locations.Location
          .map(rawLocation => new Location(rawLocation.id,
                                           rawLocation.name,
                                           rawLocation.unitaryAuthArea,
                                           rawLocation.latitude,
                                           rawLocation.longitude)
          );
      })
      .catch((error) => {
        console.error(error);
      })

  };

  /*
   * Accepts a list of Location objects, returns a K-Dimensional Tree
   */
  createTree() {

  };

}

module.exports.MetOffice = MetOffice;
