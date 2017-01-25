const MetOffice = require('./met-office').MetOffice;

class WeatherAPI {

    constructor() {};

    getWeather(postcode) {

        const mo = new MetOffice();
        mo.getWeather(postcode, 'APIKEY');

    }

}

exports.WeatherAPI = WeatherAPI;
