import * as request from 'request';
import { Location } from './Location';

export class MetOfficeQuerier {

    private metKey: string;
    private metOfficeLocations: Location[] = [];

    constructor() {
        this.metKey = process.env.MET_KEY;
    }

    /**
     * Return an Observable of all Met Office weather station locations from Met Office API
     */
    public requestMetLocations = (callback): any[] => {

        const options = {
            uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
            qs: {
                key: this.metKey
            },
            json: true
        };

        return request.get(options, (error, response, body) => {
            if (error || response.statusCode != 200) {
                console.error(error || "Error in MetOfficeQuerier.requestMetLocations()");
                return [];
            } else {
                console.log(`${body.Locations.Location.length} locations retrieved`);
                let rawLocations = body.Locations.Location;
                let locations = rawLocations.map(location => new Location(location['id'], location['name'], location['unitaryAuthArea'], location['latitude'], location['longitude']));
                callback(locations);
            }
        });

    };

};
