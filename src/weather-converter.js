class WeatherConverter {

  constructor() {
    this.times = {
      "0": "Midnight",
      "3": "3am",
      "6": "6am",
      "9": "9am",
      "12": "Noon",
      "15": "3pm",
      "18": "6pm",
      "21": "9pm"
    };
    this.weatherTypes = {
      "0": "Clear night",
      "1": "Sunny day",
      "2": "Partly cloudy",
      "3": "Partly cloudy",
      "4": "Not used",
      "5": "Mist",
      "6": "Fog",
      "7": "Cloudy",
      "8": "Overcast",
      "9": "Light rain shower",
      "10": "Light rain shower",
      "11": "Drizzle",
      "12": "Light rain",
      "13": "Heavy rain shower",
      "14": "Heavy rain shower",
      "15": "Heavy rain",
      "16": "Sleet shower",
      "17": "Sleet shower",
      "18": "Sleet",
      "19": "Hail shower",
      "20": "Hail shower",
      "21": "Hail",
      "22": "Light snow shower",
      "23": "Light snow shower",
      "24": "Light snow",
      "25": "Heavy snow shower",
      "26": "Heavy snow shower",
      "27": "Heavy snow",
      "28": "Thunder shower",
      "29": "Thunder shower",
      "30": "Thunder",
      "99": "Unknown"
    };
    this.weatherSimple = {
      "SUNNY_HOT": 1,
      "SUNNY_COLD": 2,
      "CLOUDY": 3,
      "RAIN_LIGHT": 4,
      "RAIN_HEAVY": 5,
      "SNOW": 6,
      "STORM": 7,
      "CLEAR_NIGHT": 8
    };
    this.colours = {
      "SUNNY_HOT": "#FFB340",
      "SUNNY_COLD": "#FFF06A",
      "CLOUDY": "#C9C9C9",
      "RAIN_LIGHT": "#41AAF8",
      "RAIN_HEAVY": "#077BD0",
      "SNOW": "#75E6F6",
      "STORM": "#FF6473",
      "CLEAR_NIGHT": "#191919"
    };
    this.weatherColors = {
      "1": this.colours["SUNNY_HOT"],
      "2": this.colours["SUNNY_COLD"],
      "3": this.colours["CLOUDY"],
      "4": this.colours["RAIN_LIGHT"],
      "5": this.colours["RAIN_HEAVY"],
      "6": this.colours["SNOW"],
      "7": this.colours["STORM"],
      "8": this.colours["CLEAR_NIGHT"],
    };
  };

  convertTime(hours) {
    return this.times[hours];
  }

  convertWeatherTypeToInt(codeStr) {
    return parseInt(codeStr);
  }

  convertWeatherType(code) {
    let result;
    if (this.weatherTypes[code]) {
      result = this.weatherTypes[code];
    } else {
      result = "Unknown";
      console.error("Weather code not found");
    }
    return result;
  }

  convertWeatherTypeToSimple(weatherType, temp) {
    let simple;

    // TODO: Add code
    switch (weatherType) {
      case 0:
        if (temp >= 18) {
          simple = this.weatherSimple.SUNNY_HOT;
        } else {
          simple = this.weatherSimple.SUNNY_COLD;
        }
        break;
      case 1:
        if (temp >= 18) {
          simple = this.weatherSimple.SUNNY_HOT;
        } else {
          simple = this.weatherSimple.SUNNY_COLD;
        }
        break;
      case 2:
        if (temp >= 18) {
          simple = this.weatherSimple.SUNNY_HOT;
        } else {
          simple = this.weatherSimple.SUNNY_COLD;
        }
        break;
      case 3:
        if (temp >= 18) {
          simple = this.weatherSimple.SUNNY_HOT;
        } else {
          simple = this.weatherSimple.SUNNY_COLD;
        }
        break;
      case 5:
        simple = this.weatherSimple.CLOUDY;
        break;
      case 6:
        simple = this.weatherSimple.CLOUDY;
        break;
      case 7:
        simple = this.weatherSimple.CLOUDY;
        break;
      case 8:
        simple = this.weatherSimple.CLOUDY;
        break;
      case 9:
        simple = this.weatherSimple.RAIN_LIGHT;
        break;
      case 10:
        simple = this.weatherSimple.RAIN_LIGHT;
        break;
      case 11:
        simple = this.weatherSimple.RAIN_LIGHT;
        break;
      case 12:
        simple = this.weatherSimple.RAIN_LIGHT;
        break;
      case 13:
        simple = this.weatherSimple.RAIN_HEAVY;
        break;
      case 14:
        simple = this.weatherSimple.RAIN_HEAVY;
        break;
      case 15:
        simple = this.weatherSimple.RAIN_HEAVY;
        break;
      case 16:
        simple = this.weatherSimple.SNOW;
        break;
      case 17:
        simple = this.weatherSimple.SNOW;
        break;
      case 18:
        simple = this.weatherSimple.SNOW;
        break;
      case 19:
        simple = this.weatherSimple.SNOW;
        break;
      case 20:
        simple = this.weatherSimple.SNOW;
        break;
      case 21:
        simple = this.weatherSimple.SNOW;
        break;
      case 22:
        simple = this.weatherSimple.SNOW;
        break;
      case 23:
        simple = this.weatherSimple.SNOW;
        break;
      case 24:
        simple = this.weatherSimple.SNOW;
        break;
      case 25:
        simple = this.weatherSimple.SNOW;
        break;
      case 26:
        simple = this.weatherSimple.SNOW;
        break;
      case 27:
        simple = this.weatherSimple.SNOW;
        break;
      case 28:
        simple = this.weatherSimple.STORM;
        break;
      case 29:
        simple = this.weatherSimple.STORM;
        break;
      case 30:
        simple = this.weatherSimple.STORM;
        break;
      default:
        simple = 0;

    }

    return simple;
  };

  convertWeatherToColor(weatherTypeSimple) {
    return this.weatherColors[weatherTypeSimple] || "#FFFFFF";
  }

  getTextColor(color) {
    return (color == this.colours["CLEAR_NIGHT"]) ? "#FFF" : "#000";
  }

}

module.exports.WeatherConverter = WeatherConverter;
