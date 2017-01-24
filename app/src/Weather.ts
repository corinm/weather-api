import { get } from 'request';
import { Location } from './Location';
import { createKdTree } from 'kdt';

export class Weather {

    constructor() {}

    public getWeather = (postcode, metKey) => {

        const options = {
            uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
            qs: {
                key: metKey
            },
            json: true
        };

        get(options, (error, response, body) => {
            if (error || response.statusCode != 200) {
                console.error(error || "Error");
                return [];
            } else {
                console.log("1. Retrieved locations");
                let rawLocations = body.Locations.Location;
                let locations = rawLocations.map(location => new Location(location['id'], location['name'], location['unitaryAuthArea'], location['latitude'], location['longitude']));

                let tree = this.createTree(locations);
                console.log("2. Tree created");

                // Get user's longlat
                const options = {
                    uri: 'https://api.postcodes.io/postcodes',
                    qs: {
                        q: postcode
                    },
                    json: true
                }

                get(options, (error, response, body) => {
                    if (error || response.statusCode != 200) {
                        console.error(error || "Error");
                        return [];
                    } else {
                        let latLong = {
                            lat: body.result[0].latitude,
                            long: body.result[0].longitude
                        };

                        var nearest = tree.nearest(latLong, 1);

                    }

                });

            }
        });
    };

    /**
     * Returns K-Dimensional Tree made from Met Office locations
     */
    private createTree = (locations) => {
        let latLongs = [];
        const distance = (a, b) => Math.pow(a.lat - b.lat, 2) +  Math.pow(a.long - b.long, 2);
        const coords = locations
            .map(location => {
                return {
                    lat: location.latitude,
                    long: location.longitude,
                    id: location.id
                }
            });

        return createKdTree(coords, distance, ['lat', 'long', 'id']);
    }

};