import * as request from 'request';

export class MetOfficeQuerier {

    private metKey: string;
    private metOfficeLocations: Object[];

    constructor() {
        this.metKey = process.env.MET_KEY;
        this.requestMetLocations();
    }

    /**
     * Obtains all Met Office weather station locations from Met Office API
     * Stores them in metOfficeLocations
     */
    private requestMetLocations = () => {

        const options = {
            uri: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist',
            qs: {
                key: this.metKey
            },
            json: true
        };

        request.get(options, (error, response, body) => {
            if (error) {
                console.error(error);
            } else if (response.statusCode == 200) {
                console.log(`${body.Locations.Location.length} locations retrieved`);
                this.metOfficeLocations = body.Locations.Location;
            }
        });

    };

};
