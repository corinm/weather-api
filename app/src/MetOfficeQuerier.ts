import { get } from 'https';

export class MetOfficeQuerier {

    private metHost: string = 'datapoint.metoffice.gov.uk';
    private pathMetLocations: string;

    // private urlMetWeather1: string = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/";
    // private urlMetWeather2: string = "?res=3hourly&key=";

    constructor() {
        let metKey = process.env.MET_KEY;
        this.pathMetLocations = `/public/data/val/wxfcs/all/json/sitelist?key=${metKey}`;
    }

    public requestMetLocations = () => {

        let options = {
            host: 'datapoint.metoffice.gov.uk',
            path: this.pathMetLocations,
            method: 'GET'
        };

        get(options, (response) => {
            var body: string = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {

                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                console.log(body);
                return '';
            });
        });
    }

    // public String requestWeatherData(Location location) {

    //     //System.out.println();
    //     //System.out.println(">> OBTAINING WEATHER DATA");

    //     String tempUrl = urlMetWeather1 + location.getMetId() + urlMetWeather2 + metKey;
    //     String response = null;

    //     try {
    //         response = hc.sendGet(tempUrl);

    //     } catch (IOException e) {
    //         e.printStackTrace();
    //     }
    //     return response;
    // }

}
