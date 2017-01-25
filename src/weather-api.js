const MetOffice = require('./met-office').MetOffice;

class WeatherAPI {

    constructor() {};

    getWeather() {

        const mo = new MetOffice();
        mo.getWeather('POSTCODE', 'APIKEY');

    }

}

exports.WeatherAPI = WeatherAPI;
