class Forecast3Hr {

  constructor(hours, time, windDirection, tempFeelsLike, windGust, relHumidity, precipitationProb, windSpeed,
    temp, uv, visibility, weatherType, weatherTypeFull, weatherTypeSimple, color, textColor) {
      
    this.hours = hours;
    this.time = time;

    this.windDirection = windDirection;
    this.tempFeelsLike = tempFeelsLike;
    this.windGust = windGust;
    this.relHumidity = relHumidity;
    this.precipitationProb = precipitationProb;
    this.windSpeed = windSpeed;
    this.temp = temp;
    this.uv = uv;
    this.visibility = visibility;
    this.weatherType = weatherType;
    this.weatherTypeFull = weatherTypeFull;

    this.weatherTypeSimple = weatherTypeSimple;
    this.color = color;
    this.textColor = textColor;
  }

}

module.exports.Forecast3Hr = Forecast3Hr;
