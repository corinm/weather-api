const MetOffice = require('./met-office').MetOffice;

class WeatherAPI {

  constructor() {};

  getWeather(postcode, callback) {

    const mo = new MetOffice();
    return mo.getWeather(postcode, 'APIKEY', callback)
      .then((forecasts) => {
        console.log(forecasts);
        return forecasts;
      });

  }

}

exports.WeatherAPI = WeatherAPI;
