const rp = require('request-promise');

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

    const metLocations = this.getMetOfficeLocations();

  };

  /*
   * Returns array of Met Office weather locations
   */
  getMetOfficeLocations() {
    
    console.log("HERE");

    // rp(this.optionsLocationRequest)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })

  }

}

module.exports.MetOffice = MetOffice;
