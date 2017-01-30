# weather-api

A web service that provides weather forecasts for a given postcode.  
* Obtains forecast data from [Met Office Datapoint](http://www.metoffice.gov.uk/datapoint).  
* Uses my [kd-tree-api](https://github.com/corinm/kd-tree-api) to find nearest Met Office weather station.  
* Converts postcodes to latitude and longitude using [Postcodes.io](http://postcodes.io/).  
* Returns forecast in custom format using JSON, for use in other applications.  

## API Documentation
### Get weather forecasts
**`GET /v1/weather`**  
  * Query parameter: `postcode={postcode}`, replacing {postcode} with desired postcode e.g. L16ER
  
Example query:
```
http://localhost:3000/v1/weather?postcode=L16ER
```
On success will return JSON representing the weather forecast
```
{
  "forecast": {
    "forecasts": [
      {
        "tempList": [
          {
            "hours": 0,
            "time": "Midnight",
            "windDirection": "S",
            "tempFeelsLike": "1",
            "windGust": "11",
            "relHumidity": "88",
            "precipitationProb": "62",
            "windSpeed": "7",
            "temp": "4",
            "uv": "0",
            "visibility": "MO",
            "weatherType": 13,
            "weatherTypeFull": "Heavy rain shower (night)",
            "weatherTypeSimple": 5,
            "color": "#077BD0",
            "textColor": "#000"
          },
          ...
        ],
        "date": "2017-01-29Z"
      },
      ...
    ],
    "location": "LIVERPOOL",
    "metId": "310012"
  }
}
```
Understanding the output:  
* `forecast` (object) - contains all returned data
  * `location` (string) - location of forecast
  * `metId` (string) - Met Office's id for weather station that provided the forecast
  * `forecasts` (array) - contains forecast data by day
    * `date` (string) - date for each day's forecast
    * `tempList` (array) - forecast data for each day
      * `hours` (number) - time of forecast expressed as integer, e.g. midnight = 0, 3am = 3, 3pm = 15
      * `time` (string) - time expressed in readable format e.g. 'Midnight', '3pm'
      * `windDirection` (string) - wind direction e.g. N, SW, NNW
      * `tempFeelsLike` (string) - feels like temperature in celsius
      * `windGust` (string) - wind speed of gusts in mph
      * `relHumidity` (string) - relative humidity
      * `precipitationProb` (string) - propability of precipitation
      * `windSpeed` (string) - overall wind speed in mph
      * `temp` (string) - temperature in celsius
      * `uv` (string) - uv index
      * `visibility` (string) - visibility code
      * `weatherType` (number) - weather type code (for use in other apps)
      * `weatherTypeFull` (string) - weather type description (for use in other apps)
      * `weatherTypeSimple` (number) - weather type code simple (for use in other apps)
      * `color` (string) - hex code for colour coding weather type (background colour)
      * `textColor` (string) - hex code for colour coding weather type (text colour)

## Running Locally

1. Install: NodeJS and NPM  
2. Clone this repo: `git clone https://github.com/corinm/weather-api`  
3. Run `cd weather-api`  
4. Run `npm start` to start the app  

## Deploying to Heroku

1. Run `heroku create`  
2. Run `git push heroku master`  
3. Run `heroku open`  

## Attributions
  * Weather data obtained from the [Met Office Datapoint](http://www.metoffice.gov.uk/datapoint)
  * Postcode look-up uses [Postcodes.io](http://postcodes.io/)
