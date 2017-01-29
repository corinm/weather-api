# weather-api

An API providing a weather forecast in JSON format.

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
  * Weather data obtained from the (Met Office Datapoint)[http://www.metoffice.gov.uk/datapoint]
  * Postcode look-up uses (Postcodes.io)[http://postcodes.io/]