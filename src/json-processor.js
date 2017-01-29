const ForecastAll = require('./forecast-all').ForecastAll;
const ForecastDay = require('./forecast-day').ForecastDay;
const Forecast3Hr = require('./forecast-3hr').Forecast3Hr;
const WeatherConverter = require('./weather-converter').WeatherConverter;

class JsonProcessor {

  constructor() {
    this.weatherConverter = new WeatherConverter();
  }

  parseForecasts(rawJson) {

    const days = rawJson.SiteRep.DV.Location.Period;
    const location = rawJson.SiteRep.DV.Location.name;
    const metId = rawJson.SiteRep.DV.Location.i;

    const forecasts = [];

    for (let i = 0; i < days.length; i++) {
      forecasts.push(this.processDay(days[i]));
    }

    return new ForecastAll(forecasts, location, metId);

  };

  processDay(day) {

    // Repeat once per day
    let hours1 = day;
    let hours2 = hours1.Rep;
    let date = hours1.value;

    // 2nd set of LinkedLists (ones inside the first), to contain forecast objects
    let arrayOfForecast3Hrs = [];

    for (let i = 0; i < hours2.length; i++) {
      arrayOfForecast3Hrs.push(this.processHour(hours2[i]));
    }

    return new ForecastDay(arrayOfForecast3Hrs, date);
  };

  processHour(hour) { 

    // Repeat once per hour
    const hours = hour.$ / 60;

    const time = this.weatherConverter.convertTime(hours);
    const windDirection = hour.D;
    const tempFeelsLike = hour.F;
    const windGust = hour.G;
    const relHumidity = hour.H;
    const precipitationProb = hour.Pp;
    const windSpeed = hour.S;
    const temp = hour.T;
    const uv = hour.U;
    const visibility = hour.V;
    const weatherType = this.weatherConverter.convertWeatherTypeToInt(hour.W);
    const weatherTypeFull = this.weatherConverter.convertWeatherType(weatherType);
    const weatherTypeSimple = this.weatherConverter.convertWeatherTypeToSimple(weatherType, temp);
    const color = this.weatherConverter.convertWeatherToColor(weatherTypeSimple);
    const textColor = this.weatherConverter.getTextColor(color);

    return new Forecast3Hr(hours, time, windDirection, tempFeelsLike, windGust,
            relHumidity, precipitationProb, windSpeed, temp, uv, visibility, weatherType, weatherTypeFull,
            weatherTypeSimple, color, textColor);

  };

}

module.exports.JsonProcessor = JsonProcessor;
